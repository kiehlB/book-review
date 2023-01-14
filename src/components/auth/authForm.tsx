import * as React from 'react';
import { motion } from 'framer-motion';
import { ApolloError } from '@apollo/client';
import LabelInput from '../common/LabelInput';
import clsx from 'clsx';
import Link from 'next/link';
import { Input } from '@nextui-org/react';
import Google from '../../svg/google';
import FaceBook from '../../svg/facebook';

export interface inputProps {
  password: string | number | readonly string[];
  email: string | number | readonly string[];
}

export interface AuthFormProps {
  inputs?: any;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  authError?: ApolloError;
  auth?: string;
  isRegister?: string;
  linkTo?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  inputs,
  handleChange,
  handleSubmit,
  authError,
  auth,
}) => {
  return (
    <>
      <form className="px-[6.46875rem] py-[1.5rem]" onSubmit={handleSubmit}>
        <div className="flex items-center">
          <LabelInput
            name="email"
            onChange={handleChange}
            label="Email"
            className="w-full"
            type="email"
            id="email"
            value={inputs?.email}
            placeholder="Email"
          />
        </div>
        <div className="flex items-center mt-8">
          <Input.Password
            name="password"
            onChange={handleChange}
            label="Password"
            value={inputs?.password}
            className="w-full"
            type="password"
            id="password"
            labelPlaceholder="Password"
            width="100%"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="flex bg-[#fcd435] rounded text-[#202630] mt-6  h-12 justify-center items-center font-Cabin tracking-widest w-full">
          {auth}
        </motion.button>
      </form>

      <div className="flex mt-4 items-center justify-between px-1">
        <div className="w-[136px] h-[1px] bg-[#EAECEF]"></div>
        <div className="text-[#707a8a] font-Roboto">Or</div>
        <div className="w-[136px] h-[1px] bg-[#EAECEF]"></div>
      </div>

      <div className="flex justify-between w-[50%] mx-auto pt-3">
        <Google />
        <FaceBook />
      </div>
      <div className="shelf mt-auto">
        <div className="shelf">
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>

          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>

          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>

          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>

          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>

          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
        </div>
      </div>
    </>
  );
};

export default React.memo(AuthForm);
