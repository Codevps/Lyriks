import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Loader, RelatedSongs, TopPlay } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const dispatch = useDispatch();
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  let artistSongs;
  let artistName;
  let finalData;
  artistSongs = [artistData?.data[0]?.views];
  if (isFetchingArtistDetails) {
    return <Loader title="Loading Artist Details" />;
  }
  if (error) {
    <Error />;
  }
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <div style={{ display: "none" }}>
        {Object.values(artistSongs[0]).map((nachos, index) => {
          <div>
            {nachos?.attributes?.title === "Top Songs" &&
              (finalData = nachos?.data)}
          </div>;
        })}
        {console.log(finalData)}
      </div>
      <RelatedSongs
        data={finalData}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        artistName={artistData?.data[0]?.attributes?.name}
      />
    </div>
  );
};

export default ArtistDetails;
