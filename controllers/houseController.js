import House from "../models/houseModel.js";
import Category from "../models/categoryModel.js";

//sistem sama dengan getCategory
export const getHouse = async (req, res) => {
  try {
    const houses = await House.find().populate("categoryId");
    res.json(houses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//sistem sama dengan getCategoryById
export const getHouseById = async (req, res) => {
  try {
    const house = await House.findById(req.params.id);
    res.json(house);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//menambahkan data House
export const addHouse = async (req, res) => {
  try {
    //mengambil/ mendestructure data yang dikirim body/ client
    const { name, place, categoryId } = req.body;
    //memanggil salah satu category berdasarkan categoryId yang diinput/ 
    //dipilih oleh client
    const category = await Category.findOne({ _id: categoryId });
    //membuat object newHouse
    const newHouse = {
      categoryId: category.id,
      name,
      place,
    };
    //agar newHouse tersimpan/ tertambah datanya didalam House
    //sekaligus disimpan data baru ini didalam variabel house
    const house = await House.create(newHouse); 
    //mendorong data baru untuk category.houseId dan houseId._id ini 
    //berdasarkan variable house._id
    category.houseId.push({ _id: house._id });
    //menyimpan category house agar data yang baru didorong/ ditambahkan 
    //tersimpan didalam database
    await category.save();
    //CREATED
    res.status(201).json(house);
  } catch (error) {
    //BAD REQUEST
    res.status(400).json({ message: error.message });
  }
};
