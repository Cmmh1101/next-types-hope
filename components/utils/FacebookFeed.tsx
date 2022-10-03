import React from "react";

interface Props {
  className?: string;
}

const FacebookFeed = ({ className }: Props) => {
  return (
    <div className={`${className}`}>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhopeforthenations7&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=219567793543299"
        width="340"
        title="Hope For The Nations"
        height="400"
        style={{
          border: "none",
          overflow: "hidden",
          boxShadow: "0px 0px 28px -1px rgba(0, 0, 0, 0.33)",
        }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
};

export default FacebookFeed;