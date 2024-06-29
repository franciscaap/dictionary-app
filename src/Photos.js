import React from "react";

export default function Photos(props) {
  if (props.photos.length) {
    return (
      <section>
        <div className="row g-3 Photos">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-md-4 col-sm-6" key={index}>
                <a href={photo.src.landscape} target="blank">
                  <img
                    src={photo.src.landscape}
                    alt={photo.photographer}
                    className="img-fluid rounded-2"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
