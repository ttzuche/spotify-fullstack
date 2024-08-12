import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";

const addSong = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const album = req.body.album;
    const imageFile = req.files.image[0];
    const audioFile = req.files.audio[0];
    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: "video",
    });
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
      audioUpload.duration % 60
    )}`;
    const songData = {
      name,
      desc,
      album,
      image: imageUpload.secure_url,
      file: audioUpload.secure_url,
      duration,
    };

    const song = new songModel(songData);
    // Save in our database
    await song.save();
    res.json({ success: true, message: "Song added successfully" });
  } catch (error) {
    res.json({ success: false });
    console.log(error);
  }
};

const listSong = async (req, res) => {
  try {
    const allSongs = await songModel.find({}); // No filter to get all songs
    res.json({ success: true, songs: allSongs });
  } catch (error) {
    res.json({ success: false });
  }
};

const removeSong = async (req, res) => {
  try {
    const songId = req.body.id;
    await songModel.findByIdAndDelete(songId);
    res.json({ success: true, message: "Song deleted successfully" });
  } catch (error) {
    res.json({ success: false });
  }
};

export { addSong, listSong, removeSong };
