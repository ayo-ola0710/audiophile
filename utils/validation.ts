export interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber: string;
  eMoneyPin: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const validateCheckoutForm = (
  formData: FormData,
  cart: CartItem[]
): { isValid: boolean; errors: Record<string, string> } => {
  const newErrors: Record<string, string> = {};

  // Validate name
  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = "Please enter a valid email address";
  }

  // Validate phone
  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (formData.phone.trim().length < 10) {
    newErrors.phone = "Please enter a valid phone number";
  }

  // Validate address
  if (!formData.address.trim()) {
    newErrors.address = "Address is required";
  }

  // Validate ZIP code
  if (!formData.zip.trim()) {
    newErrors.zip = "ZIP code is required";
  } else if (!/^\d{5}(-\d{4})?$/.test(formData.zip.trim())) {
    newErrors.zip = "Please enter a valid ZIP code";
  }

  // Validate city
  if (!formData.city.trim()) {
    newErrors.city = "City is required";
  }

  // Validate country
  if (!formData.country.trim()) {
    newErrors.country = "Country is required";
  }

  // Validate e-money fields if e-money is selected
  if (formData.paymentMethod === "e-money") {
    if (!formData.eMoneyNumber.trim()) {
      newErrors.eMoneyNumber = "e-Money number is required";
    } else if (!/^\d{9}$/.test(formData.eMoneyNumber.trim())) {
      newErrors.eMoneyNumber = "Please enter a valid 9-digit e-Money number";
    }

    if (!formData.eMoneyPin.trim()) {
      newErrors.eMoneyPin = "e-Money PIN is required";
    } else if (!/^\d{4}$/.test(formData.eMoneyPin.trim())) {
      newErrors.eMoneyPin = "Please enter a valid 4-digit PIN";
    }
  }

  // Check if cart is empty
  if (cart.length === 0) {
    newErrors.cart = "Your cart is empty. Please add items before checkout.";
  }

  return {
    isValid: Object.keys(newErrors).length === 0,
    errors: newErrors,
  };
};
