const { Car } = require("../models/carSheme");

// Create car
const CreateCar = async (req, res) => {
  try {
    const {
      title,
      model,
      description,
      color,
      horsePower,
      carType,
      charging,
      weight,
      gasoline,
      yearMachine,
      price,
    } = req.body;
    const oldCar = await Car.findOne({ model });
    if (oldCar) {
      return res
        .status(400)
        .json({
          message: "Bunday model mavjud, oldin bu model ro'yhatdan o'tkazilgan",
        });
    }

    const newcar = new Car({
      title,
      model,
      description,
      color,
      horsePower,
      carType,
      charging,
      weight,
      gasoline,
      yearMachine,
      price,
    });

    await newcar.save();
    res
      .status(200)
      .json({ message: "Mashina muvaffaqiyatli qo'shildi", car: newcar });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Get all cars
const GetAllCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    res.json({
      success: true,
      message: "Mashinalar ro'yhati",
      cars,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get car by ID
const GetCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: "Bunday id mavjud emas" });

    res.status(200).json({ message: "Mashina topildi", car });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internet hatosi" });
  }
};

// Update car
const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      model,
      description,
      color,
      horsePower,
      carType,
      charging,
      weight,
      gasoline,
      yearMachine,
      price,
    } = req.body;

    const updatedCar = await Car.findByIdAndUpdate(
      id,
      {
        model,
        description,
        color,
        horsePower,
        carType,
        charging,
        weight,
        gasoline,
        yearMachine,
        price,
      },
      { new: true }
    );

    if (!updatedCar) {
      return res.status(404).json({ message: "Bunday id mavjud emas" });
    }

    res.json({
      message: "Mashina muvaffaqiyatli o'zgartirildi",
      car: updatedCar,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Delete car
const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCar = await Car.findByIdAndDelete(id);

    if (!deletedCar) {
      return res.status(404).json({ message: "Bunday id mavjud emas" });
    }

    res.json({
      message: "Mashina muvaffaqiyatli o'chirildi",
      car: deletedCar,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { CreateCar, GetAllCars, GetCarById, updateCar, deleteCar };
