import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema; //agar bisa berelasi antar collection

const HouseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  categoryId: {
    type: ObjectId,
    ref: "Category", //memanggil collection Category
  },
});

export default mongoose.model("House", HouseSchema);
