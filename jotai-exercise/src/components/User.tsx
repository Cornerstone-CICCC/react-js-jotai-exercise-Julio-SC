// src/components/User/User.tsx
import { useAtom } from 'jotai'
import { firstNameAtom, lastNameAtom, ageAtom, hobbiesAtom } from '../atoms/user.atom'
import { useState } from 'react'

const hobbiesList = ["Reading", "Music", "Sports", "Traveling"]

const User = () => {
  const [firstName, setFirstName] = useAtom(firstNameAtom)
  const [lastName, setLastName] = useAtom(lastNameAtom)
  const [age, setAge] = useAtom(ageAtom)
  const [hobbies, setHobbies] = useAtom(hobbiesAtom)

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    age: '',
    hobbies: [] as string[]
  })

  const handleCheckboxChange = (hobby: string) => {
    setForm(prev => ({
      ...prev,
      hobbies: prev.hobbies.includes(hobby)
        ? prev.hobbies.filter(h => h !== hobby)
        : [...prev.hobbies, hobby]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFirstName(form.firstName)
    setLastName(form.lastName)
    setAge(Number(form.age))
    setHobbies(form.hobbies)
  }

  return (
    <div>
      <h1>Guest User</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
      <p>Hobbies: {hobbies.join(', ') || 'None'}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={form.firstName}
          onChange={e => setForm({ ...form, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={form.lastName}
          onChange={e => setForm({ ...form, lastName: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={e => setForm({ ...form, age: e.target.value })}
        />

        <fieldset>
          <legend>Select Hobbies</legend>
          {hobbiesList.map(hobby => (
            <label key={hobby}>
              <input
                type="checkbox"
                value={hobby}
                checked={form.hobbies.includes(hobby)}
                onChange={() => handleCheckboxChange(hobby)}
              />
              {hobby}
            </label>
          ))}
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default User
