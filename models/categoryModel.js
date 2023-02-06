import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema; //agar bisa berelasi antar collection

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  houseId: [
    {
      type: ObjectId,
      ref: "House", //memanggil collection House
    },
  ],
});

export default mongoose.model("Category", CategorySchema);
