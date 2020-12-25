import React, { useState } from "react";
import { Row, Card, Spinner } from "react-bootstrap/";
import UploadFileButton from "../buttons/UploadFileButton";

const ImageCard = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <br />
      <h6>{props.action_text}</h6>
      <div className=" container-md mt-3 ">
        <Row className=" row-cols-2 w-100 mt4 bg-blue">
          <Card
            className=" w-10 p-2"
            style={{
              borderWidth: 0,
            }}
          >
            <label
              style={{
                width: "100%",
                height: 40,
                textAlign: "center",
                borderRadius: 10,
                margin: 2,
                backgroundColor: "blueviolet",
              }}
            >
              <Card.Img
                style={{
                  borderRadius: 10,
                  marginBottom: 2,
                  height: 100,
                  width: "100%",
                }}
                variant="top"
                src={props.image.front}
              />
              {/* <input
                                type="file"
                                accept="image/*"
                                style={{
                                    display: "none",
                                }}
                                className=" custom-file-input"
                                onChange={(e) => {
                                    setLoading(true);
                                    props.setData(e, "front");
                                    // props.postImage(e, "front");
                                    setLoading(false);
                                }}
                            />
                            <Button style={{ fontSize: 12 }} onClick={() => {}}>
                                {props.data[1].action_text}
                            </Button> */}
              <UploadFileButton
                handleFilePicker={(e) => {
                  setLoading(true);
                  props.setData(e, "front");
                  props.postImage(e, "front");
                  setLoading(false);
                }}
                label={props.data[0].action_text}
              />
            </label>
          </Card>

          <Card className=" w-10 p-2" style={{ borderWidth: 0 }}>
            <label
              style={{
                width: "100%",
                height: 40,
                textAlign: "center",
                backgroundColor: "#8585e0",
                borderRadius: 10,
                margin: 2,
              }}
            >
              <Card.Img
                style={{
                  borderRadius: 10,
                  marginBottom: 2,
                  height: 100,
                  width: "100%",
                }}
                variant="top"
                src={props.image.back}
              />
              {/* <input
                                type="file"
                                accept="image/*"
                                style={{
                                    display: "none",
                                }}
                                className=" custom-file-input"
                                onChange={(e) => {
                                    setLoading(true);
                                    props.setData(e, "back");
                                    setLoading(false);
                                }}
                            />
                            <Button style={{ fontSize: 12 }}>
                                {props.data[1].action_text}
                            </Button> */}
              <UploadFileButton
                handleFilePicker={(e) => {
                  setLoading(true);
                  props.setData(e, "back");
                  setLoading(false);
                }}
                label={props.data[1].action_text}
              />
            </label>
          </Card>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <div className=" container-md mt-3 mt-100 ">
        <Row className=" row-cols-2 w-100 mt4">
          <Card className=" w-10 p-2" style={{ borderWidth: 0 }}>
            <label
              style={{
                width: "100%",
                height: 40,
                textAlign: "center",
                backgroundColor: "#8585e0",
                borderRadius: 10,
                margin: 2,
              }}
            >
              <Card.Img
                style={{
                  borderRadius: 10,
                  marginBottom: 2,
                  height: 100,
                  width: "100%",
                }}
                variant="top"
                src={props.image.right}
              />
              {/* <input
                                type="file"
                                accept="image/*"
                                style={{
                                    display: "none",
                                }}
                                className=" custom-file-input"
                                onChange={(e) => {
                                    setLoading(true);
                                    props.setData(e, "right");
                                    setLoading(false);
                                }}
                            />
                            <Button style={{ fontSize: 12 }}>
                                {props.data[2].action_text}
                            </Button> */}
              <UploadFileButton
                handleFilePicker={(e) => {
                  setLoading(true);
                  props.setData(e, "right");
                  setLoading(false);
                }}
                label={props.data[2].action_text}
              />
            </label>
          </Card>
          <Card className=" w-10 p-2" style={{ borderWidth: 0 }}>
            <label
              style={{
                width: "100%",
                height: 40,
                textAlign: "center",
                backgroundColor: "#8585e0",
                borderRadius: 10,
                margin: 2,
              }}
            >
              <Card.Img
                style={{
                  borderRadius: 10,
                  marginBottom: 2,
                  height: 100,
                  width: "100%",
                }}
                variant="top"
                src={props.image.left}
              />
              {/* <input
                                type="file"
                                accept="image/*"
                                style={{
                                    display: "none",
                                }}
                                className=" custom-file-input"
                                onChange={(e) => {
                                    setLoading(true);
                                    props.setData(e, "left");
                                    setLoading(false);
                                }}
                            />
                            <Button style={{ fontSize: 12 }}>
                                {props.data[3].action_text}
                            </Button> */}
              <UploadFileButton
                handleFilePicker={(e) => {
                  setLoading(true);
                  props.setData(e, "left");
                  setLoading(false);
                }}
                label={props.data[3].action_text}
              />
            </label>
          </Card>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <br />
      {loading === true ? (
        <>
          <h7>Loading</h7>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </>
      ) : null}
    </>
  );
};
export default ImageCard;
