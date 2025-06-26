// import React, { useState, useEffect } from 'react';
// import { X } from 'lucide-react';
// import { useAuth } from '../../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// interface AuthModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   type: 'login' | 'signup';
//   userType: 'user' | 'lynker';
// }

// const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, type: initialType, userType: initialUserType }) => {
//   const [type, setType] = useState(initialType);
//   const [userType, setUserType] = useState(initialUserType);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     setType(initialType);
//     setUserType(initialUserType);
//   }, [initialType, initialUserType]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setIsLoading(true);
    
//     try {
//       const API_URL = 'http://localhost:9000/auth';
//       let response;
      
//       if (type === 'login') {
//         // Call login endpoint
//         response = await fetch(`${API_URL}/login`, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email, password })
//         });
//       } else {
//         // Call signup endpoint
//         response = await fetch(`${API_URL}/signin`, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             fullname: name,
//             email,
//             password,
//             typeofuser: userType === 'lynker' ? 'lynker' : 'normal_user',
//             mobile: '' 
//           })
//         });
//       }
      
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Authentication failed');
//       }
      
//       // Handle successful authentication
//       const data = await response.json();
//       console.log('Authentication successful:', data);
//       navigate('/find-lynker');
//       onClose();
//     } catch (err: any) {
//       setError(err.message || 'Authentication failed. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
//       <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-slide-up">
//         <div className="relative">
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//           >
//             <X size={20} />
//           </button>
          
//           <div className="p-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-1">
//               {type === 'login' ? 'Welcome back' : 'Join Lynk'}
//             </h2>
//             <p className="text-gray-600 mb-6">
//               {type === 'login' 
//                 ? 'Sign in to access your account' 
//                 : `Sign up as a ${userType === 'lynker' ? 'Lynker' : 'User'}`}
//             </p>
            
//             {error && (
//               <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
//                 {error}
//               </div>
//             )}
            
//             <form onSubmit={handleSubmit}>
//               {type === 'signup' && (
//                 <div className="mb-4">
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     id="name"
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lynk-purple focus:border-transparent"
//                     placeholder="Enter your full name"
//                     required
//                   />
//                 </div>
//               )}
              
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lynk-purple focus:border-transparent"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
              
//               <div className="mb-6">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lynk-purple focus:border-transparent"
//                   placeholder="Enter your password"
//                   required
//                 />
//               </div>
              
//               {type === 'signup' && (
//                 <div className="mb-6">
//                   <p className="text-sm font-medium text-gray-700 mb-2">I want to:</p>
//                   <div className="grid grid-cols-2 gap-4">
//                     <button
//                       type="button"
//                       onClick={() => setUserType('user')}
//                       className={`p-3 text-center rounded-lg border transition-all ${
//                         userType === 'user'
//                           ? 'border-lynk-purple bg-lynk-light text-lynk-purple'
//                           : 'border-gray-300 text-gray-700 hover:bg-gray-50'
//                       }`}
//                     >
//                       Find a Lynker
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => setUserType('lynker')}
//                       className={`p-3 text-center rounded-lg border transition-all ${
//                         userType === 'lynker'
//                           ? 'border-lynk-purple bg-lynk-light text-lynk-purple'
//                           : 'border-gray-300 text-gray-700 hover:bg-gray-50'
//                       }`}
//                     >
//                       Become a Lynker
//                     </button>
//                   </div>
//                 </div>
//               )}
              
//               <button
//                 type="submit"
//                 className="w-full btn-primary"
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Loading...' : type === 'login' ? 'Log in' : 'Sign up'}
//               </button>
//             </form>
            
//             <div className="mt-6 text-center">
//               {type === 'login' ? (
//                 <p className="text-gray-600">
//                   Don't have an account?{' '}
//                   <button
//                     onClick={() => setType('signup')}
//                     className="text-lynk-purple hover:text-lynk-dark font-medium"
//                   >
//                     Sign up
//                   </button>
//                 </p>
//               ) : (
//                 <p className="text-gray-600">
//                   Already have an account?{' '}
//                   <button
//                     onClick={() => setType('login')}
//                     className="text-lynk-purple hover:text-lynk-dark font-medium"
//                   >
//                     Log in
//                   </button>
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthModal;



import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
  userType: 'user' | 'lynker';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, type: initialType, userType: initialUserType }) => {
  const [type, setType] = useState(initialType);
  const [userType, setUserType] = useState(initialUserType);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { login } = useAuth(); // ✅ Use login from context

  useEffect(() => {
    setType(initialType);
    setUserType(initialUserType);
  }, [initialType, initialUserType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const API_URL = 'http://localhost:9000/auth';
      let response;

      if (type === 'login') {
        response = await fetch(`${API_URL}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include', // ✅ Important for cookies if applicable
          body: JSON.stringify({ email, password })
        });
      } else {
        response = await fetch(`${API_URL}/signin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
           credentials: 'include',
          body: JSON.stringify({
            fullname: name,
            email,
            password,
            typeofuser: userType === 'lynker' ? 'lynker' : 'normal_user',
            mobile: ''
          })
        });
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Authentication failed');
      }

      await login(email, password);
      navigate('/find-lynker');  
      onClose();               
    } catch (err: any) {
      setError(err.message || 'Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-slide-up">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {type === 'login' ? 'Welcome back' : 'Join Lynk'}
            </h2>
            <p className="text-gray-600 mb-6">
              {type === 'login'
                ? 'Sign in to access your account'
                : `Sign up as a ${userType === 'lynker' ? 'Lynker' : 'User'}`}
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {type === 'signup' && (
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lynk-purple focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              )}

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lynk-purple focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lynk-purple focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {type === 'signup' && (
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">I want to:</p>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setUserType('user')}
                      className={`p-3 text-center rounded-lg border transition-all ${
                        userType === 'user'
                          ? 'border-lynk-purple bg-lynk-light text-lynk-purple'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Find a Lynker
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType('lynker')}
                      className={`p-3 text-center rounded-lg border transition-all ${
                        userType === 'lynker'
                          ? 'border-lynk-purple bg-lynk-light text-lynk-purple'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Become a Lynker
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full btn-primary"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : type === 'login' ? 'Log in' : 'Sign up'}
              </button>
            </form>

            <div className="mt-6 text-center">
              {type === 'login' ? (
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setType('signup')}
                    className="text-lynk-purple hover:text-lynk-dark font-medium"
                  >
                    Sign up
                  </button>
                </p>
              ) : (
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <button
                    onClick={() => setType('login')}
                    className="text-lynk-purple hover:text-lynk-dark font-medium"
                  >
                    Log in
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
