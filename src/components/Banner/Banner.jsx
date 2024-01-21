export const Banner = ({ pathimage, text }) => {
  return (
    <div className="banner-container">
      <img src={pathimage} alt="banner" />
      <div className="banner-text-container">
        <div className="banner-text">{text}</div>
      </div>
    </div>
  );
};
