import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useTransition } from "react-spring";
import {
  WatchListSideBar,
  WatchListHeader,
  WatchListItems,
  WatchListFooter,
  CloseButton
} from "./styles";

import { GET_WATCHLIST } from "../../models/movies/queries";

import { Movie } from "../../models/movies/types";

import WatchListItem from "../WatchList/components/WatchListItem";

interface IWatchListProps {
  isOpen: boolean;
  onWatchListClose: () => void;
}

const WatchList: React.FC<IWatchListProps> = ({ isOpen, onWatchListClose }) => {
  // Ignore this, handles the slidey in animation for the watch list side bar
  const entryTransition = useTransition(isOpen, null, {
    from: { transform: "translateX(100%" },
    enter: { transform: "translateX(0)" },
    leave: { transform: "translateX(100%)" }
  });

  const { data, loading } = useQuery(GET_WATCHLIST);

  if (loading) {
    return null;
  }

  let runTimes: number[] = [];

  if (data && data.watchlist) {
    data.watchlist.map((movie: Movie) => {
      runTimes.push(movie.runTime);
    });
  }

  return (
    <React.Fragment>
      {entryTransition.map(
        ({ item, key, props }) =>
          item && (
            <WatchListSideBar key={key} style={props}>
              <WatchListHeader>
                <CloseButton onClick={onWatchListClose}>close</CloseButton>
              </WatchListHeader>
              {data && data.watchlist && (
                <WatchListItems>
                  {data.watchlist.map((movie: Movie) => (
                    <WatchListItem key={movie.id} movie={movie} />
                  ))}
                </WatchListItems>
              )}
              <WatchListFooter>
                {runTimes && (
                  <p>
                    Total running time: {runTimes.reduce((a, b) => a + b, 0)}{" "}
                    mins
                  </p>
                )}
              </WatchListFooter>
            </WatchListSideBar>
          )
      )}
    </React.Fragment>
  );
};

export default WatchList;
