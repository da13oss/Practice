import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  confirmPassword: z.string(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

interface RequirementProps {
  met: boolean;
  text: string;
}

const Requirement: React.FC<RequirementProps> = ({ met, text }) => (
  <div className="flex items-center space-x-2 text-sm">
    {met ? (
      <Check className="h-4 w-4 text-green-500" />
    ) : (
      <X className="h-4 w-4 text-red-500" />
    )}
    <span className={met ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
      {text}
    </span>
  </div>
);

export const RegisterForm: React.FC = () => {
  const register = useAuthStore((state) => state.register);
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const {
    register: registerField,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const watchedPassword = watch('password', '');
  const watchedEmail = watch('email', '');
  const watchedName = watch('name', '');

  const requirements = {
    name: [
      {
        met: watchedName.length >= 2,
        text: 'At least 2 characters long',
      },
    ],
    email: [
      {
        met: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(watchedEmail),
        text: 'Valid email format (example@domain.com)',
      },
    ],
    password: [
      {
        met: watchedPassword.length >= 8,
        text: 'At least 8 characters long',
      },
      {
        met: /[A-Z]/.test(watchedPassword),
        text: 'Contains uppercase letter',
      },
      {
        met: /[a-z]/.test(watchedPassword),
        text: 'Contains lowercase letter',
      },
      {
        met: /[0-9]/.test(watchedPassword),
        text: 'Contains number',
      },
      {
        met: /[^A-Za-z0-9]/.test(watchedPassword),
        text: 'Contains special character',
      },
    ],
  };

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await register(data.email, data.password, data.name);
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                {...registerField('name')}
                type="text"
                onFocus={() => setFocusedField('name')}
                className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm dark:bg-gray-700"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <input
                {...registerField('email')}
                type="email"
                onFocus={() => setFocusedField('email')}
                className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm dark:bg-gray-700"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                {...registerField('password')}
                type="password"
                onFocus={() => setFocusedField('password')}
                className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm dark:bg-gray-700"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirm Password
              </label>
              <input
                {...registerField('confirmPassword')}
                type="password"
                className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm dark:bg-gray-700"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-50"
            >
              {isSubmitting ? 'Creating account...' : 'Sign up'}
            </button>
          </div>
        </form>
      </div>

      {/* Requirements Window */}
      <div className="hidden lg:block ml-8 w-80">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md sticky top-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Field Requirements
          </h3>
          
          {focusedField && (
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize mb-2">
                {focusedField} Requirements
              </h4>
              <div className="space-y-2">
                {requirements[focusedField as keyof typeof requirements]?.map((req, index) => (
                  <Requirement key={index} met={req.met} text={req.text} />
                ))}
              </div>
            </div>
          )}
          
          {!focusedField && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Click on any field to see its requirements
            </p>
          )}
        </div>
      </div>
    </div>
  );
};