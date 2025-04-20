
import { createContext, useContext, ReactNode } from "react";

// Example data structure for buttons
export const buttonComponents = [
  {
    id: "button-primary",
    title: "Primary Button",
    description: "A standard primary button for key actions",
    preview: <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">Primary Button</button>,
    html: `<button class="primary-button">Primary Button</button>`,
    css: `.primary-button {
  background-color: #2563eb;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
}

.primary-button:hover {
  background-color: #1d4ed8;
}`,
  },
  {
    id: "button-secondary",
    title: "Secondary Button",
    description: "A standard secondary button for secondary actions",
    preview: <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded">Secondary Button</button>,
    html: `<button class="secondary-button">Secondary Button</button>`,
    css: `.secondary-button {
  background-color: #e5e7eb;
  color: #1f2937;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
}

.secondary-button:hover {
  background-color: #d1d5db;
}`,
  },
  {
    id: "button-outline",
    title: "Outline Button",
    description: "A button with an outline style",
    preview: <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded">Outline Button</button>,
    html: `<button class="outline-button">Outline Button</button>`,
    css: `.outline-button {
  background-color: transparent;
  color: #2563eb;
  border: 1px solid #2563eb;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
}

.outline-button:hover {
  background-color: rgba(37, 99, 235, 0.05);
}`,
  },
];

// Example data structure for toggles
export const toggleComponents = [
  {
    id: "toggle-switch",
    title: "Toggle Switch",
    description: "A simple toggle switch for boolean settings",
    preview: (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-700">Toggle me</span>
      </label>
    ),
    html: `<label class="toggle-switch">
  <input type="checkbox">
  <span class="slider"></span>
  <span class="toggle-label">Toggle me</span>
</label>`,
    css: `.toggle-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.toggle-switch input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  background-color: #e5e7eb;
  transition: .4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  border: 1px solid #d1d5db;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #3b82f6;
}

input:checked + .slider:before {
  transform: translateX(24px);
  border-color: white;
}

.toggle-label {
  margin-left: 0.75rem;
  font-size: 0.875rem;
  color: #374151;
}`,
  },
  {
    id: "toggle-ios",
    title: "iOS Style Toggle",
    description: "A toggle switch that mimics iOS style with a smooth animation",
    preview: (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-14 h-7 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500"></div>
        <span className="ml-3 text-sm font-medium text-gray-700">iOS Toggle</span>
      </label>
    ),
    html: `<label class="ios-toggle">
  <input type="checkbox">
  <span class="ios-slider"></span>
  <span class="ios-label">iOS Toggle</span>
</label>`,
    css: `.ios-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.ios-toggle input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.ios-slider {
  position: relative;
  display: inline-block;
  width: 56px;
  height: 28px;
  background-color: #e5e7eb;
  transition: background-color 0.2s ease-in-out;
  border-radius: 14px;
}

.ios-slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: transform 0.2s ease-in-out;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

input:checked + .ios-slider {
  background-color: #10b981;
}

input:checked + .ios-slider:before {
  transform: translateX(28px);
}

input:focus + .ios-slider {
  box-shadow: 0 0 1px #10b981;
}

.ios-label {
  margin-left: 0.75rem;
  font-size: 0.875rem;
  color: #374151;
}`,
  },
  {
    id: "toggle-with-icons",
    title: "Toggle with Icons",
    description: "A toggle switch with icons to indicate on/off states",
    preview: (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
          <span className="flex items-center justify-center h-full w-5 absolute left-0.5 text-gray-400 text-xs">✗</span>
          <span className="flex items-center justify-center h-full w-5 absolute right-0.5 text-white text-xs">✓</span>
        </div>
        <span className="ml-3 text-sm font-medium text-gray-700">With Icons</span>
      </label>
    ),
    html: `<label class="icon-toggle">
  <input type="checkbox">
  <div class="icon-slider">
    <span class="icon-off">✗</span>
    <span class="icon-on">✓</span>
  </div>
  <span class="icon-label">With Icons</span>
</label>`,
    css: `.icon-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.icon-toggle input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.icon-slider {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  background-color: #d1d5db;
  transition: .4s;
  border-radius: 24px;
}

.icon-slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
  z-index: 2;
}

.icon-off {
  position: absolute;
  left: 4px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 10px;
}

.icon-on {
  position: absolute;
  right: 4px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
}

input:checked + .icon-slider {
  background-color: #3b82f6;
}

input:checked + .icon-slider:before {
  transform: translateX(20px);
}

.icon-label {
  margin-left: 0.75rem;
  font-size: 0.875rem;
  color: #374151;
}`,
  },
  {
    id: "toggle-size-variants",
    title: "Size Variants",
    description: "Toggle switches in different sizes: small, medium, and large",
    preview: (
      <div className="flex flex-col space-y-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-xs font-medium text-gray-700">Small</span>
        </label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-700">Medium</span>
        </label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-14 h-7 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-base font-medium text-gray-700">Large</span>
        </label>
      </div>
    ),
    html: `<label class="toggle-small">
  <input type="checkbox" checked>
  <span class="toggle-small-slider"></span>
  <span class="toggle-small-label">Small</span>
</label>

<label class="toggle-medium">
  <input type="checkbox" checked>
  <span class="toggle-medium-slider"></span>
  <span class="toggle-medium-label">Medium</span>
</label>

<label class="toggle-large">
  <input type="checkbox" checked>
  <span class="toggle-large-slider"></span>
  <span class="toggle-large-label">Large</span>
</label>`,
    css: `.toggle-small, .toggle-medium, .toggle-large {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;
}

.toggle-small input, .toggle-medium input, .toggle-large input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* Small toggle */
.toggle-small-slider {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 16px;
  background-color: #e5e7eb;
  transition: .4s;
  border-radius: 16px;
}

.toggle-small-slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

.toggle-small-label {
  margin-left: 0.75rem;
  font-size: 0.75rem;
  color: #374151;
}

/* Medium toggle */
.toggle-medium-slider {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  background-color: #e5e7eb;
  transition: .4s;
  border-radius: 24px;
}

.toggle-medium-slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

.toggle-medium-label {
  margin-left: 0.75rem;
  font-size: 0.875rem;
  color: #374151;
}

/* Large toggle */
.toggle-large-slider {
  position: relative;
  display: inline-block;
  width: 56px;
  height: 28px;
  background-color: #e5e7eb;
  transition: .4s;
  border-radius: 28px;
}

.toggle-large-slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

.toggle-large-label {
  margin-left: 0.75rem;
  font-size: 1rem;
  color: #374151;
}

/* Active states for all toggles */
input:checked + .toggle-small-slider,
input:checked + .toggle-medium-slider,
input:checked + .toggle-large-slider {
  background-color: #3b82f6;
}

input:checked + .toggle-small-slider:before {
  transform: translateX(16px);
}

input:checked + .toggle-medium-slider:before {
  transform: translateX(20px);
}

input:checked + .toggle-large-slider:before {
  transform: translateX(28px);
}`,
  },
  {
    id: "toggle-color-variants",
    title: "Color Variants",
    description: "Toggle switches with different color themes",
    preview: (
      <div className="flex flex-col space-y-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-700">Blue (Default)</span>
        </label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
          <span className="ml-3 text-sm font-medium text-gray-700">Green</span>
        </label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-700">Purple</span>
        </label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
          <span className="ml-3 text-sm font-medium text-gray-700">Red</span>
        </label>
      </div>
    ),
    html: `<label class="toggle-blue">
  <input type="checkbox" checked>
  <span class="toggle-blue-slider"></span>
  <span class="toggle-label">Blue (Default)</span>
</label>

<label class="toggle-green">
  <input type="checkbox" checked>
  <span class="toggle-green-slider"></span>
  <span class="toggle-label">Green</span>
</label>

<label class="toggle-purple">
  <input type="checkbox" checked>
  <span class="toggle-purple-slider"></span>
  <span class="toggle-label">Purple</span>
</label>

<label class="toggle-red">
  <input type="checkbox" checked>
  <span class="toggle-red-slider"></span>
  <span class="toggle-label">Red</span>
</label>`,
    css: `.toggle-blue, .toggle-green, .toggle-purple, .toggle-red {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;
}

.toggle-blue input, .toggle-green input, .toggle-purple input, .toggle-red input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-blue-slider, .toggle-green-slider, .toggle-purple-slider, .toggle-red-slider {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  background-color: #e5e7eb;
  transition: .4s;
  border-radius: 24px;
}

.toggle-blue-slider:before, .toggle-green-slider:before, .toggle-purple-slider:before, .toggle-red-slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

.toggle-label {
  margin-left: 0.75rem;
  font-size: 0.875rem;
  color: #374151;
}

/* Color-specific active states */
input:checked + .toggle-blue-slider {
  background-color: #3b82f6; /* Blue */
}

input:checked + .toggle-green-slider {
  background-color: #10b981; /* Green */
}

input:checked + .toggle-purple-slider {
  background-color: #8b5cf6; /* Purple */
}

input:checked + .toggle-red-slider {
  background-color: #ef4444; /* Red */
}

input:checked + .toggle-blue-slider:before,
input:checked + .toggle-green-slider:before,
input:checked + .toggle-purple-slider:before,
input:checked + .toggle-red-slider:before {
  transform: translateX(20px);
}`,
  },
];

export const checkboxComponents = [
  {
    id: "checkbox-simple",
    title: "Simple Checkbox",
    description: "A standard checkbox for single selection",
    preview: (
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="check1" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
        <label htmlFor="check1" className="text-sm text-gray-700">I agree to the terms</label>
      </div>
    ),
    html: `<div class="checkbox-container">
  <input type="checkbox" id="checkbox" class="checkbox-input">
  <label for="checkbox" class="checkbox-label">I agree to the terms</label>
</div>`,
    css: `.checkbox-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox-input {
  height: 1rem;
  width: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #d1d5db;
  color: #2563eb;
}

.checkbox-input:focus {
  outline: 2px solid rgba(37, 99, 235, 0.2);
  outline-offset: 2px;
}

.checkbox-label {
  font-size: 0.875rem;
  color: #374151;
}`,
  },
  {
    id: "checkbox-custom",
    title: "Custom Checkbox",
    description: "A styled checkbox with custom appearance",
    preview: (
      <div className="flex items-center space-x-2">
        <div className="relative flex items-center">
          <input type="checkbox" id="check2" className="sr-only" />
          <div className="h-5 w-5 rounded border border-gray-300 bg-white"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
              <path d="M3 6L5 8L9 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <label htmlFor="check2" className="text-sm text-gray-700">Newsletter subscription</label>
      </div>
    ),
    html: `<div class="custom-checkbox-container">
  <label class="custom-checkbox">
    <input type="checkbox" class="custom-checkbox-input">
    <span class="custom-checkbox-control"></span>
    <span class="custom-checkbox-label">Newsletter subscription</span>
  </label>
</div>`,
    css: `.custom-checkbox-container {
  display: flex;
  align-items: center;
}

.custom-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.custom-checkbox-input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}

.custom-checkbox-control {
  position: relative;
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  border: 1px solid #d1d5db;
  background-color: white;
}

.custom-checkbox-control:after {
  content: "";
  position: absolute;
  display: none;
  left: 0.4rem;
  top: 0.2rem;
  width: 0.3rem;
  height: 0.6rem;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.custom-checkbox-input:checked ~ .custom-checkbox-control {
  background-color: #2563eb;
  border-color: #2563eb;
}

.custom-checkbox-input:checked ~ .custom-checkbox-control:after {
  display: block;
}

.custom-checkbox-label {
  font-size: 0.875rem;
  color: #374151;
}`,
  },
  {
    id: "checkbox-toggle",
    title: "Toggle Checkbox",
    description: "A checkbox styled as a toggle switch",
    preview: (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900">Toggle me</span>
      </label>
    ),
    html: `<label class="toggle-checkbox">
  <input type="checkbox" class="toggle-checkbox-input">
  <span class="toggle-checkbox-slider"></span>
  <span class="toggle-checkbox-label">Toggle me</span>
</label>`,
    css: `.toggle-checkbox {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.toggle-checkbox-input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}

.toggle-checkbox-slider {
  position: relative;
  display: inline-block;
  width: 2.75rem;
  height: 1.5rem;
  background-color: #e5e7eb;
  border-radius: 9999px;
  transition: background-color 0.2s;
}

.toggle-checkbox-slider:after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 1.25rem;
  height: 1.25rem;
  background-color: white;
  border-radius: 50%;
  border: 1px solid #d1d5db;
  transition: transform 0.2s;
}

.toggle-checkbox-input:checked ~ .toggle-checkbox-slider {
  background-color: #2563eb;
}

.toggle-checkbox-input:checked ~ .toggle-checkbox-slider:after {
  transform: translateX(1.25rem);
  border-color: white;
}

.toggle-checkbox-input:focus ~ .toggle-checkbox-slider {
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.25);
  outline: none;
}

.toggle-checkbox-label {
  margin-left: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}`,
  },
];

export const cardComponents = [
  {
    id: "card-simple",
    title: "Simple Card",
    description: "A basic card component with title and content",
    preview: (
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Card title</h5>
          <p className="mb-3 text-gray-700">This is some placeholder content for a simple card component.</p>
        </div>
      </div>
    ),
    html: `<div class="simple-card">
  <div class="simple-card-body">
    <h5 class="simple-card-title">Card title</h5>
    <p class="simple-card-text">This is some placeholder content for a simple card component.</p>
  </div>
</div>`,
    css: `.simple-card {
  max-width: 24rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.simple-card-body {
  padding: 1.25rem;
}

.simple-card-title {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: #111827;
}

.simple-card-text {
  margin-bottom: 0.75rem;
  color: #4b5563;
}`,
  },
  {
    id: "card-with-image",
    title: "Card with Image",
    description: "A card component with an image header",
    preview: (
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <img className="w-full h-48 object-cover" src="/placeholder.svg" alt="Card image" />
        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Card with image</h5>
          <p className="mb-3 text-gray-700">This card includes an image at the top as a header or featured visual.</p>
        </div>
      </div>
    ),
    html: `<div class="image-card">
  <img src="/path-to-image.jpg" alt="Card image" class="image-card-img">
  <div class="image-card-body">
    <h5 class="image-card-title">Card with image</h5>
    <p class="image-card-text">This card includes an image at the top as a header or featured visual.</p>
  </div>
</div>`,
    css: `.image-card {
  max-width: 24rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.image-card-img {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}

.image-card-body {
  padding: 1.25rem;
}

.image-card-title {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: #111827;
}

.image-card-text {
  margin-bottom: 0.75rem;
  color: #4b5563;
}`,
  },
  {
    id: "card-with-actions",
    title: "Card with Actions",
    description: "A card component with action buttons",
    preview: (
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Card with actions</h5>
          <p className="mb-4 text-gray-700">This card includes action buttons in the footer for user interactions.</p>
          <div className="flex justify-end space-x-2">
            <button className="px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded">Cancel</button>
            <button className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded">Confirm</button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="action-card">
  <div class="action-card-body">
    <h5 class="action-card-title">Card with actions</h5>
    <p class="action-card-text">This card includes action buttons in the footer for user interactions.</p>
    <div class="action-card-footer">
      <button class="action-card-btn-secondary">Cancel</button>
      <button class="action-card-btn-primary">Confirm</button>
    </div>
  </div>
</div>`,
    css: `.action-card {
  max-width: 24rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.action-card-body {
  padding: 1.25rem;
}

.action-card-title {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: #111827;
}

.action-card-text {
  margin-bottom: 1rem;
  color: #4b5563;
}

.action-card-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.action-card-btn-secondary {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #374151;
  background-color: #f3f4f6;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}

.action-card-btn-secondary:hover {
  background-color: #e5e7eb;
}

.action-card-btn-primary {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: white;
  background-color: #2563eb;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}

.action-card-btn-primary:hover {
  background-color: #1d4ed8;
}`,
  },
];

// Form components
export const formComponents = [
  {
    id: "form-login",
    title: "Login Form",
    description: "A simple login form with email and password fields",
    preview: (
      <form className="max-w-sm mx-auto p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold mb-6 text-center text-gray-900">Log In</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your email" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your password" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
          Sign In
        </button>
      </form>
    ),
    html: `<form class="login-form">
  <h2 class="login-title">Log In</h2>
  <div class="form-group">
    <label for="email" class="form-label">Email</label>
    <input type="email" id="email" class="form-input" placeholder="Enter your email">
  </div>
  <div class="form-group">
    <label for="password" class="form-label">Password</label>
    <input type="password" id="password" class="form-input" placeholder="Enter your password">
  </div>
  <button type="submit" class="login-button">Sign In</button>
</form>`,
    css: `.login-form {
  max-width: 24rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.login-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #111827;
}

.form-group {
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
}

.form-input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.form-input:focus {
  outline: none;
  border-color: transparent;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5);
}

.login-button {
  width: 100%;
  background-color: #2563eb;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.login-button:hover {
  background-color: #1d4ed8;
}`,
  },
];

// Navigation components
export const navigationComponents = [
  {
    id: "nav-simple",
    title: "Simple Navbar",
    description: "A basic navigation bar with logo and links",
    preview: (
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5">
        <div className="flex flex-wrap justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap">Logo</span>
          </a>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-blue-700 md:p-0">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700 md:p-0">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700 md:p-0">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700 md:p-0">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    ),
    html: `<nav class="simple-navbar">
  <div class="navbar-container">
    <a href="#" class="navbar-logo">Logo</a>
    <ul class="navbar-menu">
      <li class="navbar-item">
        <a href="#" class="navbar-link active">Home</a>
      </li>
      <li class="navbar-item">
        <a href="#" class="navbar-link">About</a>
      </li>
      <li class="navbar-item">
        <a href="#" class="navbar-link">Services</a>
      </li>
      <li class="navbar-item">
        <a href="#" class="navbar-link">Contact</a>
      </li>
    </ul>
  </div>
</nav>`,
    css: `.simple-navbar {
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.75rem 1rem;
}

.navbar-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.navbar-item {
  margin: 0;
  padding: 0;
}

.navbar-link {
  color: #4b5563;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s;
}

.navbar-link:hover,
.navbar-link.active {
  color: #2563eb;
}

@media (max-width: 768px) {
  .navbar-menu {
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    gap: 0;
  }
  
  .navbar-item {
    width: 100%;
  }
  
  .navbar-link {
    display: block;
    padding: 0.5rem 0;
  }
}`,
  },
];

// Loader components
export const loaderComponents = [
  {
    id: "loader-spinner",
    title: "Spinner Loader",
    description: "A simple spinner animation for loading states",
    preview: (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    ),
    html: `<div class="spinner-container">
  <div class="spinner"></div>
</div>`,
    css: `.spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: 4px solid #3b82f6;
  border-top-color: transparent;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`,
  },
];

// Create context for components
type ComponentContextType = {
  buttonComponents: typeof buttonComponents;
  toggleComponents: typeof toggleComponents;
  checkboxComponents: typeof checkboxComponents;
  cardComponents: typeof cardComponents;
  formComponents: typeof formComponents;
  navigationComponents: typeof navigationComponents;
  loaderComponents: typeof loaderComponents;
};

const ComponentContext = createContext<ComponentContextType | undefined>(
  undefined
);

export const ComponentProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ComponentContext.Provider
      value={{
        buttonComponents,
        toggleComponents,
        checkboxComponents,
        cardComponents,
        formComponents,
        navigationComponents,
        loaderComponents,
      }}
    >
      {children}
    </ComponentContext.Provider>
  );
};

export const useComponents = () => {
  const context = useContext(ComponentContext);
  if (context === undefined) {
    throw new Error("useComponents must be used within a ComponentProvider");
  }
  return context;
};
