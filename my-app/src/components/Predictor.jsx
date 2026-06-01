import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";

const classNames = [
  "Buildings",
  "Forest",
  "Glacier",
  "Mountain",
  "Sea",
  "Street"
];

export default function Predictor() {

  const [model, setModel] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [prediction, setPrediction] = useState("");

  useEffect(() => {

    async function loadModel() {

      const loadedModel =
        await tf.loadGraphModel(
          "/models/tfjs_model/model.json"
        );

      setModel(loadedModel);

      console.log("Model loaded");
    }

    loadModel();

  }, []);

  const handleUpload = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    setImageUrl(url);

    predictImage(url);
  };

  const predictImage = async (url) => {

    if (!model) {
      alert("Model belum selesai dimuat");
      return;
    }

    const img = new Image();

    img.src = url;

    img.onload = async () => {

      const tensor = tf.browser
        .fromPixels(img)
        .resizeBilinear([150,150])
        .toFloat()
        .div(255)
        .expandDims();

      const pred = await model.executeAsync(
        tensor
      );

      const data = await pred.data();

      const maxIndex =
        data.indexOf(Math.max(...data));

      setPrediction(
        `${classNames[maxIndex]}
        (${(data[maxIndex]*100).toFixed(2)}%)`
      );

      tensor.dispose();
      pred.dispose();
    };
  };

  return (
    <div>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />

      <br /><br />

      {imageUrl && (
        <img
          src={imageUrl}
          alt="preview"
          width="300"
        />
      )}

      <h2>{prediction}</h2>

    </div>
  );
}