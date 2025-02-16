import { Helmet } from "react-helmet";

export const HeadTagsComponent = ({ isMobileDevice }) => (
  <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
      rel="stylesheet"
    />

    <style>
      {`
        body {
          background-color: rgb(0, 0, 0);
          color: rgb(255, 255, 255);
          font-family: "Source Code Pro", monospace;
          font-optical-sizing: auto;
          font-weight: <weight>;
          font-style: normal;
        }

        .card-body {
          background-color: rgb(0, 0, 0) !important;
          color: #eee !important;
        }
      `}
    </style>
  </Helmet>
);
