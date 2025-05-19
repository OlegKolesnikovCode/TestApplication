import { LitElement, html, css } from 'lit';

        class UserInputForm extends LitElement {
            static styles = css`
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    max-width: 300px;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }

                label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                }

                input[type="text"],
                input[type="tel"],
                input[type="email"] {
                    width: 100%;
                    padding: 8px;
                    border: 1px solid #ddd;
                    border-radius: 3px;
                    box-sizing: border-box;
                }

                button {
                    padding: 10px 15px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 3px;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #0056b3;
                }
            `;

            static properties = {
                firstName: { type: String },
                lastName: { type: String },
                address: { type: String },
                phoneNumber: { type: String },
                email: { type: String },
            };

            constructor() {
                super();
                this.firstName = '';
                this.lastName = '';
                this.address = '';
                this.phoneNumber = '';
                this.email = '';
            }

            _handleInputChange(event) {
                const { name, value } = event.target;
                this[name] = value;
            }

            _handleSubmit(event) {
                event.preventDefault();
                const userData = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    address: this.address,
                    phoneNumber: this.phoneNumber,
                    email: this.email,
                };
                console.log('User Data:', userData);
                // In a real application, you would likely send this data to a server
                alert('Form submitted! Check the console for the data.');
            }

            render() {
                return html`
                    <form @submit=${this._handleSubmit}>
                        <label for="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            .value=${this.firstName}
                            @input=${this._handleInputChange}
                            required
                        >

                        <label for="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            .value=${this.lastName}
                            @input=${this._handleInputChange}
                            required
                        >

                        <label for="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            .value=${this.address}
                            @input=${this._handleInputChange}
                            required
                        >

                        <label for="phoneNumber">Phone Number:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            .value=${this.phoneNumber}
                            @input=${this._handleInputChange}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="Format: 123-456-7890"
                            required
                        >

                        <label for="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            .value=${this.email}
                            @input=${this._handleInputChange}
                            required
                        >

                        <button type="submit">Submit</button>
                    </form>
                `;
            }
        }

        customElements.define('user-input-form', UserInputForm);
