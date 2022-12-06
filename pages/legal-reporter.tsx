import Hero from "components/home/Hero";
import PageHeading from "components/PageHeading";
import VideoGrid from "components/pages/VideoGrid";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import styles from "../components/VideoModal.module.scss";

const YOUTUBE_PLAYLIST_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

const PLAYLIST_ID = "PLPWEDbk41oFUYtDTf2_CFFPmj9pvrPCMV";

const LeagalReporter: NextPage = ({ data, dataTwo, dataThree }: any) => {
  const [playerVideo, setPlayerVideo] = useState("wVwe7TgJYq0");
  return (
    <>
      <Head>
        <title>Just Nyay | Legal Issue No Issue</title>

        <meta
          name="description"
          content="One stop solution to all your legal proplems"
        />
        <meta
          name="keywords"
          content="legal, reporter, case, court, solutions"
        ></meta>
      </Head>
      <Hero />
      <PageHeading title="Legal Repoter TV" />
      <div
        id="player"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: ".5rem",
          background: "rgba(0,0,0,0.05)",
          marginBottom: "1rem",
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${playerVideo}?autoplay=1&mute=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Legal Reporter"
          className={styles.player}
          style={{ marginBottom: "0rem" }}
        />
      </div>
      <VideoGrid>
        {data.items.slice(1).map((item: any) => {
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId = {} } = snippet;
          const { medium = {} } = thumbnails;

          return (
            <div
              onClick={() => {
                setPlayerVideo(resourceId.videoId);
                window.scrollTo(0, 300);
              }}
              key={id}
              style={{
                cursor: "pointer",
                padding: ".5rem",
                border: "1px solid rgba(0,0,0,0.2)",
                marginBottom: "1rem",
                borderRadius: "5px",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>
                <img
                  src={medium.url}
                  width={medium.width}
                  height={medium.height}
                  alt=""
                />
              </p>
              <span
                style={{
                  marginTop: "1rem",
                  display: "block",
                  lineHeight: "1.4",
                  fontWeight: "600",
                  opacity: ".9",
                }}
              >
                {title}
              </span>
            </div>
          );
        })}
      </VideoGrid>
      <div className="container">
        <h3 className={styles.playlist_heading}>Know The Law</h3>
      </div>
      <VideoGrid>
        {dataTwo.items.map((item: any) => {
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId = {} } = snippet;
          const { medium = {} } = thumbnails;

          return (
            <div
              onClick={() => {
                setPlayerVideo(resourceId.videoId);
                window.scrollTo(0, 300);
              }}
              key={id}
              style={{
                cursor: "pointer",
                padding: ".5rem",
                border: "1px solid rgba(0,0,0,0.2)",
                marginBottom: "1rem",
                borderRadius: "5px",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>
                <img
                  src={medium.url}
                  width={medium.width}
                  height={medium.height}
                  alt=""
                />
              </p>
              <span
                style={{
                  marginTop: "1rem",
                  display: "block",
                  lineHeight: "1.4",
                  fontWeight: "600",
                  opacity: ".9",
                }}
              >
                {title}
              </span>
            </div>
          );
        })}
      </VideoGrid>
      <div className="container">
        <h3 className={styles.playlist_heading}>Legal Updates</h3>
      </div>
      <VideoGrid>
        {dataThree.items.map((item: any) => {
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId = {} } = snippet;
          const { medium = {} } = thumbnails;

          return (
            <div
              onClick={() => {
                setPlayerVideo(resourceId.videoId);
                window.scrollTo(0, 300);
              }}
              key={id}
              style={{
                cursor: "pointer",
                padding: ".5rem",
                border: "1px solid rgba(0,0,0,0.2)",
                marginBottom: "1rem",
                borderRadius: "5px",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>
                <img
                  src={medium.url}
                  width={medium.width}
                  height={medium.height}
                  alt=""
                />
              </p>
              <span
                style={{
                  marginTop: "1rem",
                  display: "block",
                  lineHeight: "1.4",
                  fontWeight: "600",
                  opacity: ".9",
                }}
              >
                {title}
              </span>
            </div>
          );
        })}
      </VideoGrid>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(
    `${YOUTUBE_PLAYLIST_API}?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
  )
    .then((data) => data.json())
    .catch((err) => console.log(err));

  const dataThree = await fetch(
    `${YOUTUBE_PLAYLIST_API}?part=snippet&playlistId=PLPWEDbk41oFXiLjG1LL-m_1jdIwYT1B9B&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
  )
    .then((data) => data.json())
    .catch((err) => console.log(err));

  const dataTwo = await fetch(
    `${YOUTUBE_PLAYLIST_API}?part=snippet&playlistId=PLPWEDbk41oFWkFmwwzmCgtCRPK3VdAfha&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
  )
    .then((data) => data.json())
    .catch((err) => console.log(err));

  return {
    props: {
      data,
      dataTwo,
      dataThree,
    },
  };
};

export default LeagalReporter;
