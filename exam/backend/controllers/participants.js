import Participants from '../models/participants.js'
import slugify from 'slugify'
export const create = async (req, res) => {
  try {
    const { name, category, email, age, date } = req.fields

    // validation
    switch (true) {
      case !name.trim():
        res.json({ error: 'Full name is required' })
      case !category.trim():
        res.json({ error: 'Category is required' })
      case !email.trim():
        res.json({ error: 'Email is required' })
      case !age.trim():
        res.json({ error: 'Age is required' })
      case !date.trim():
        res.json({ error: 'Date of birth is required' })
    }
    const participants = await new Participants({
      ...req.fields,
      slug: slugify(name),
    }).save()
    res.json(participants)
  } catch (err) {
    console.log(err)
    return res.status(400).json(err.message)
  }
}

export const read = async (req, res) => {
  try {
    const participant = await Participants.findOne({ slug: req.params.slug })
    res.json(participant)
  } catch (err) {
    console.log(err)
  }
}

export const remove = async (req, res) => {
  try {
    const participants = await Participants.findByIdAndDelete(
      req.params.participantstId
    )
    res.json(participants)
  } catch (err) {
    console.log(err)
  }
}

export const update = async (req, res) => {
  try {
    // console.log(req.fields);
    // console.log(req.files);
    const { name, category, email, age, date } = req.fields
    res.json(participants)
  } catch (err) {
    console.log(err)
  }
}
