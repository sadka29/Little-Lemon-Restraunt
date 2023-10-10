import React, { useReducer } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



const schema = yup.object().shape({
  resDate: yup.string().required("Date is required"),
  resTime: yup.string().required("Time is required"),
  guests: yup
    .number()
    .required("Number of guests is required")
    .min(1, "Minimum 1 guest is required")
    .max(10, "Maximum 10 guests allowed"),
  occasion: yup.string().required("Occasion is required"),
});

function timesReducer(state, action) {
    // For now, the reducer can return the same available times regardless of the date
    return [
      "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ];
  }
function BookingForm ({availableTimes,setAvailableTimes}) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [state, dispatch] = useReducer(timesReducer, availableTimes);

  

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value; // Get the selected date from the input

    // Step 2: Dispatch the state change when the date field is changed
    const updatedTimes = timesReducer(state, { type: 'UPDATE_TIMES', selectedDate });

    // Update the availableTimes state in the Main component
    setAvailableTimes(updatedTimes);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)} className="grid max-w-xs gap-4 mx-auto">
        <label htmlFor="resDate">Choose date</label>
        <Controller
          name="resDate"
          control={control}
          defaultValue=""
          onChange={handleDateChange}
          render={({ field }) => (
            <input type="date" id="resDate" className="border rounded py-2 px-3" {...field} />
          )}
        />
        <p className="text-red-500">{errors.resDate?.message}</p>

        <label htmlFor="resTime">Choose time</label>
        <Controller
          name="resTime"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select id="resTime" className="border rounded py-2 px-3" {...field}>
              <option value="">Select Time</option>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          )}
        />
        <p className="text-red-500">{errors.resTime?.message}</p>

        <label htmlFor="guests">Number of guests</label>
        <Controller
          name="guests"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              className="border rounded py-2 px-3"
              {...field}
            />
          )}
        />
        <p className="text-red-500">{errors.guests?.message}</p>

        <label htmlFor="occasion">Occasion</label>
        <Controller
          name="occasion"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select id="occasion" className="border rounded py-2 px-3" {...field}>
              <option value="">Select Occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          )}
        />
        <p className="text-red-500">{errors.occasion?.message}</p>

        <input type="submit" value="Make Your Reservation" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" />
      </form>
    </section>
  );
}

export default BookingForm ;
