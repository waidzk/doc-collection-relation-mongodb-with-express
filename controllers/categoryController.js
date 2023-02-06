import Category from "../models/categoryModel.js";

//mendapatkan seluruh data category
export const getCategory = async (req, res) => {
  try {
    //memanggil seluruh data category dan membuka data House dengan HouseId
    const categories = await Category.find().populate("houseId");
    res.json(categories); //mencetak sebuah json hasil panggil categories
  } catch (error) {
    //terjadi kesalahan pada sisi server
    res.status(500).json({ message: error.message });
  }
};

//mendapatkan salah satu data category dengan memanggil id nya
export const getCategoryById = async (req, res) => {
  try {
    //memanggil data category sesuai id yang dipanggil di params url dengan nama id
    const category = await Category.findById(req.params.id);
    res.json(category); //mencetak hasil category dalam bentuk json dan dikirim ke client
  } catch (error) {
    //NOT FOUND 
    res.status(404).json({ message: error.message });
  }
};

//menambahkan category
export const addCategory = async (req, res) => {
    //mendapatkan data yang dikirim oleh body/ client ke dalam newCategory
  const newCategory = new Category(req.body);
  try {
    //menyimpan newCategory dan dijadikan variable insertCategory untuk
    //di tampilkan ke client
    const insertCategory = await newCategory.save();
    //201 -> created, permintaan yang dibuat oleh klien ke server untuk 
    //membuat sumber daya baru telah berhasil dilakukan
    res.status(201).json(insertCategory);
  } catch (error) {
    //400 -> menunjukkan adanya masalah karena permintaan yang tidak valid
    res.status(400).json({ message: error.message });
  }
};
