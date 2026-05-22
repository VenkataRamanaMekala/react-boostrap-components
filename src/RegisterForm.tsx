import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toast, ToastContainer } from "react-bootstrap";

const RegisterForm: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const fruitOptions = ["Orange", "Banana"];

  const [fruits, setFruits] = useState<string[]>([]);

  const [showDropdown, setShowDropdown] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    singleOption: "",
    multiOptions: [] as string[],
    multiSelect: [] as string[],
    flavor: "",
    favoriteColor: "#000000",
    date: "",
    range: 50,
    quantity: 5,
    file: null as File | null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        multiOptions: [...formData.multiOptions, value],
      });
    } else {
      setFormData({
        ...formData,
        multiOptions: formData.multiOptions.filter((item) => item !== value),
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        file: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    setShowToast(true);

    // Reset Form
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      singleOption: "",
      multiOptions: [],
      multiSelect: [],
      flavor: "",
      favoriteColor: "#000000",
      date: "",
      range: 50,
      quantity: 5,
      file: null,
      message: "",
    });
  };

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div
        className="card shadow-lg p-4 rounded-4 border border-primary"
        style={{
          width: "700px",
          borderWidth: "2px",
          backgroundColor: "#ffffff",
        }}
      >
        <fieldset className="border p-4 rounded">
          <legend className="float-none w-auto px-3 fs-4 fw-bold text-primary text-center mx-auto">
            This is your sample Form
          </legend>

        </fieldset>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name:</label>

            <input
              type="text"
              className="form-control w-25"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              className="form-control w-25"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label d-block">Gender:</label>

            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="Male"
                onChange={handleChange}
              />

              <label className="form-check-label">Male</label>
            </div>

            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="Female"
                onChange={handleChange}
              />

              <label className="form-check-label">Female</label>
            </div>

            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="Others"
                onChange={handleChange}
              />

              <label className="form-check-label">Others</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Choose an option:</label>

            <select
              className="form-select w-25"
              name="singleOption"
              value={formData.singleOption}
              onChange={handleChange}
            >
              <option value="">Select Option</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label d-block">
              Select Multiple Options:
            </label>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value="Option A"
                onChange={handleCheckbox}
              />
              <label className="form-check-label">Option A</label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value="Option B"
                onChange={handleCheckbox}
              />
              <label className="form-check-label">Option B</label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value="Option C"
                onChange={handleCheckbox}
              />
              <label className="form-check-label">Option C</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Start typing and it will guess:
            </label>

            <input
              list="flavors"
              className="form-control w-50"
              name="flavor"
              value={formData.flavor}
              onChange={handleChange}
              placeholder="Type flavor..."
            />

            <datalist id="flavors">
              <option value="Strawberry" />
              <option value="Vanilla" />
              <option value="Mint" />
              <option value="Banana" />
            </datalist>
          </div>

          <div className="mb-3 d-flex align-items-center gap-3">
            <label className="form-label mb-0">
              Select your favorite color:
            </label>

            <input
              type="color"
              className="form-control form-control-color"
              name="favoriteColor"
              value={formData.favoriteColor}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 d-flex align-items-center gap-3">
            <label className="form-label mb-0">Select a Date:</label>

            <input
              type="date"
              className="form-control w-25"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label d-block">
              Scroll to see a range value:
            </label>

            <div className="d-flex align-items-center gap-3 w-25">
              <input
                type="range"
                className="form-range"
                min="0"
                max="100"
                name="range"
                value={formData.range}
                onChange={handleChange}
              />

              <span className="fw-semibold">{formData.range}</span>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Select Fruits:</label>

            <div className="position-relative w-50">
              <button
                type="button"
                className="d-flex align-items-center flex-wrap gap-2 p-2 border rounded-3 w-100 bg-white"
                style={{
                  minHeight: "45px",
                  cursor: "pointer",
                }}
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                {fruits.length > 0 ? (
                  fruits.map((fruit: string, index: number) => (
                    <div
                      key={fruit}
                      className="bg-light border rounded-pill px-2 py-1 d-flex align-items-center"
                    >
                      <span>{fruit}</span>

                      <button
                        type="button"
                        className="btn-close ms-2"
                        style={{
                          fontSize: "10px",
                        }}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                          e.stopPropagation();

                          setFruits(
                            fruits.filter(
                              (_: string, i: number) => i !== index,
                            ),
                          );
                        }}
                      ></button>
                    </div>
                  ))
                ) : (
                  <span className="text-muted">Select fruits</span>
                )}
              </button>

              {showDropdown && (
                <div
                  className="border rounded-3 bg-white shadow-sm mt-1 position-absolute w-100"
                  style={{
                    zIndex: 1000,
                  }}
                >
                  {fruitOptions.map((fruit: string) => (
                    <button
                      key={fruit}
                      type="button"
                      className="dropdown-item p-2 text-start"
                      onClick={() => {
                        if (!fruits.includes(fruit)) {
                          setFruits([...fruits, fruit]);
                        }

                        setShowDropdown(false);
                      }}
                    >
                      {fruit}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label d-block">Select quantity:</label>

            <div className="d-flex align-items-center gap-3">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() =>
                  setFormData({
                    ...formData,
                    quantity: formData.quantity > 1 ? formData.quantity - 1 : 1,
                  })
                }
              >
                -1
              </button>

              <span className="fw-bold fs-5">{formData.quantity}</span>

              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() =>
                  setFormData({
                    ...formData,
                    quantity:
                      formData.quantity < 10 ? formData.quantity + 1 : 10,
                  })
                }
              >
                +1
              </button>
            </div>
          </div>
          <div className="mb-3 d-flex align-items-center gap-3">
            <label className="form-label mb-0">Select a File:</label>

            <div className="d-flex align-items-center gap-2">
              <input
                type="file"
                id="fileUpload"
                hidden
                onChange={handleFileChange}
              />

              <label
                htmlFor="fileUpload"
                className="btn btn-outline-secondary btn-sm"
                style={{ cursor: "pointer" }}
              >
                Choose File
              </label>

              <span className="text-muted">
                {formData.file ? formData.file.name : "No file chosen"}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Long Message:</label>

            <textarea
              className="form-control"
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write something..."
            />
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button
              type="submit"
              className="btn btn-primary px-4 py-2 rounded-3"
              style={{ width: "120px" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <ToastContainer position="top-end" className="p-3">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          bg="success"
        >
          <Toast.Header>
            <strong className="me-auto">Success</strong>
          </Toast.Header>

          <Toast.Body className="text-white">
            Form submitted successfully!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default RegisterForm;
