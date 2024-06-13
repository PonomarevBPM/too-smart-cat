import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  screen: {
    backgroundImage: `url(../dist/cat_7680x4320.png)`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
  videoContainer: {
    width: "100%",
  },
}));

export const DEFAULT_VIDEO = "..\\dist\\Content\\Silence.mp4";

export const Screen = () => {
  const classes = useStyles();

  const [videoUrl, setvideoUrl] = useState(DEFAULT_VIDEO);

  useEffect(() => {
    exposedApi.setVideoName("videoName", (_events, args) => {
      setvideoUrl(args);
    });
  });

  return (
    <div className={classes.screen}>
      <video
        className={classes.videoContainer}
        src={videoUrl}
        autoPlay
        onEnded={() => setvideoUrl(DEFAULT_VIDEO)}
        loop={videoUrl === DEFAULT_VIDEO}
      />
    </div>
  );
};
