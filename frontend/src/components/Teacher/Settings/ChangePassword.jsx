import React, { useState } from 'react';

const ChangePasswordSection = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!currentPassword.trim()) {
      newErrors.currentPassword = 'Current password is required';
    }
    if (!newPassword.trim()) {
      newErrors.newPassword = 'New password is required';
    } else if (newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    } else if (newPassword === currentPassword) {
      newErrors.newPassword = 'New password must be different from current password';
    }
    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccessMessage('Password changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setErrors({});
    } catch (error) {
      setErrors({ submit: 'Failed to change password. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Change Password</h2>
        <p className="text-gray-600">Ensure your account is using a strong, unique password.</p>
      </div>

      {successMessage && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Current Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className={`w-full px-4 py-2 border ${
                errors.currentPassword ? 'border-red-500' : 'border-gray-200'
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.currentPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.currentPassword}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            New Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={`w-full px-4 py-2 border ${
              errors.newPassword ? 'border-red-500' : 'border-gray-200'
            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Confirm New Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full px-4 py-2 border ${
              errors.confirmPassword ? 'border-red-500' : 'border-gray-200'
            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {errors.submit && (
          <p className="text-red-500 text-sm">{errors.submit}</p>
        )}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-2 text-white font-medium rounded-lg transition-colors ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isLoading ? 'Updating...' : 'Update Password'}
          </button>
          <button
            type="button"
            onClick={() => {
              setCurrentPassword('');
              setNewPassword('');
              setConfirmPassword('');
              setErrors({});
            }}
            className="px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </form>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-600 mb-2">Password Requirements</h3>
        <ul className="text-sm text-gray-500 list-disc pl-5 space-y-1">
          <li>Minimum 8 characters</li>
          <li>At least one number or special character</li>
          <li>Shouldn't match previous passwords</li>
        </ul>
      </div>
    </div>
  );
};

export default ChangePasswordSection;