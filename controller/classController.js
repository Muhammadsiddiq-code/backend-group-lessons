const { classController, Class } = require("../models/classScheme")

// create
// const createClass = async (req, res) => {
//     try {
//         const {
//             teacher,
//             name1,
//             name2,
//             name3,
//             name4,
//             name5,
//             name6,
//             name7,
//             name8,
//             name9,
//             name10,
//             name11,
//             name12,
//             name13,
//             name14,
//             name15,
//             name16,
//         } = req.body
//         const oldClass = await classController.findOne({ teacher })
//         if (oldClass) {
//             return res.status(404).json({ message: "Bunday class mavjud, oldin royhatdan otqazilgan" })
//         }
//         const newClass = new Class({
//             teacher,
//             name1,
//             name2,
//             name3,
//             name4,
//             name5,
//             name6,
//             name7,
//             name8,
//             name9,
//             name10,
//             name11,
//             name12,
//             name13,
//             name14,
//             name15,
//             name16,
//         })
//         await newClass.save()
//         res.status(200).json({ message: "class saqlandi", Class: newClass })
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({ message: "Serverda xatolik", message: error.message })
//     }
// };



const createClass = async (req, res) => {
  try {
    const {
      teacher,
      name1,
      name2,
      name3,
      name4,
      name5,
      name6,
      name7,
      name8,
      name9,
      name10,
      name11,
      name12,
      name13,
      name14,
      name15,
      name16,
    } = req.body;

    // Bu yerda to‘g‘ri modeldan foydalanish kerak
    const oldClass = await Class.findOne({ teacher });

    if (oldClass) {
      return res.status(404).json({
        message: "Bunday class mavjud, oldin ro'yhatdan o'tkazilgan",
      });
    }

    const newClass = new Class({
      teacher,
      name1,
      name2,
      name3,
      name4,
      name5,
      name6,
      name7,
      name8,
      name9,
      name10,
      name11,
      name12,
      name13,
      name14,
      name15,
      name16,
    });

    await newClass.save();

    res.status(200).json({
      message: "Class saqlandi",
      Class: newClass,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Serverda xatolik",
      error: error.message,
    });
  }
};







// Get all class
const getAllClass = async (req, res) => {
    try {
        const classes = await Class.find({});
        res.json({
            succes: true,
            message: "Uquvchilar royhati",
            classes,
        });
    }
        catch (error) {
            console.log(error);
            res.status(500).json({
              succes: false,
              message: error.message,
            });
        }
}
    
// getClasById
const GetClassById = async (req, res) => {
    try {
        const classId = await Class.findById(req.params.id);
        if (!classId) return
        res.status(404).json({
            message: "bunday uquvchi mavjud emas"
        })
        res.status(200).json({
            succes: true,
            message: "Uquvchi topildi",
            classId,
        });
    }
        catch (error) {
            console.log(error);
            res.status(500).json({
              message: "Serverda xatolik",
            });
        }
}

// updateClass
// const updateClass = async (req, res) => {
//     const { id } = req.params;

//     const {
//         teacher,
//         name1,
//         name2,
//         name3,
//         name4,
//         name5,
//         name6,
//         name7,
//         name8,
//         name9,
//         name10,
//         name11,
//         name12,
//         name13,
//         name14,
//         name15,
//         name16,
//     } = req.body;

//     const updateClass = await Class.findByIdAndUpdate(
//         id,
//         {
//             teacher,
//             name1,
//             name2,
//             name3,
//             name4,
//             name5,
//             name6,
//             name7,
//             name8,
//             name9,
//             name10,
//             name11,
//             name12,
//             name13,
//             name14,
//             name15,
//             name16,
//         },
//         { new: true }
//     );
//     if (!updateClass) {
//         return res.status(404).json({ message: "Class not found yani topilmadi" });
//     }
//     res.json({
//         message: "Class updated successfully yangilandi",
//         Class: updateClass,
//     });
// }catch (error) {
//     res.status(500).json({ message: "Server error" });
// }



const updateClass = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      teacher,
      name1,
      name2,
      name3,
      name4,
      name5,
      name6,
      name7,
      name8,
      name9,
      name10,
      name11,
      name12,
      name13,
      name14,
      name15,
      name16,
    } = req.body;

    const updated = await Class.findByIdAndUpdate(
      id,
      {
        teacher,
        name1,
        name2,
        name3,
        name4,
        name5,
        name6,
        name7,
        name8,
        name9,
        name10,
        name11,
        name12,
        name13,
        name14,
        name15,
        name16,
      },
      { new: true }
    );

    if (!updated) {
      return res
        .status(404)
        .json({ message: "Class not found yani topilmadi" });
    }

    res.json({
      message: "Class updated successfully yangilandi",
      Class: updated,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// delete class

// deleteClass
const deleteClass = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedClass = await Class.findByIdAndDelete(id);

        if (!deletedClass) {
            return res.status(404).json({
                message: "Bunday class topilmadi, o‘chirish imkonsiz"
            });
        }

        res.status(200).json({
            message: "Class muvaffaqiyatli o‘chirildi",
            deletedClass,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Serverda xatolik",
            error: error.message
        });
    }
};

module.exports = {
  createClass,
  getAllClass,
  GetClassById,
  updateClass,
  deleteClass,
};
