import * as React from 'react';
import { motion } from 'framer-motion';
import { ApolloError } from '@apollo/client';
import LabelInput from '../common/LabelInput';
import clsx from 'clsx';
import Link from 'next/link';
import { Input, useInput, Grid } from '@nextui-org/react';
import Google from '../../svg/google';
import FaceBook from '../../svg/facebook';
import useWhoAmI from './hooks/useWhoami';

export interface inputProps {
  password: string | number | readonly string[];
  email: string | number | readonly string[];
}

export declare type BindingsChangeTarget =
  | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | string;

export interface AuthFormProps {
  email?: string;
  password?: string;
  EB: {
    value: string;
    onChange: (event: BindingsChangeTarget) => void;
  };
  PB: {
    value: string;
    onChange: (event: BindingsChangeTarget) => void;
  };
  helper: any;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  authError?: ApolloError;
  auth?: string;
  isRegister?: string;
  linkTo?: string;
  Passwordhelper: any;
  mode: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  handleSubmit,
  authError,
  auth,
  EB,
  PB,
  helper,
  Passwordhelper,
  mode,
}) => {
  return (
    <>
      <form className="px-[6.46875rem] py-[1.5rem]" onSubmit={handleSubmit}>
        <div className="flex items-center">
          <Input
            {...EB}
            clearable
            status={helper?.color}
            color={helper?.color}
            helperColor={helper?.color}
            helperText={helper?.text}
            width="100%"
            label="Email"
            className="w-full"
            type="email"
            labelPlaceholder="Email"
          />
        </div>
        <div className="flex items-center mt-12">
          <Input.Password
            {...PB}
            clearable
            status={Passwordhelper?.color}
            color={Passwordhelper?.color}
            helperColor={Passwordhelper?.color}
            helperText={Passwordhelper?.text}
            label="Password"
            className="w-full"
            type="password"
            labelPlaceholder="Password"
            width="100%"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="flex bg-[#fcd435]   text-[#202630] mt-12 h-12 justify-center items-center tracking-widest w-full rounded-xl">
          {auth}
        </motion.button>
      </form>
      <div className="px-[6rem]">
        {/* {mode == 'register' ? '회원가입' : '로그인'}으로 이동 */}
      </div>

      <div className="flex my-4 items-center justify-between px-1">
        <div className="w-[136px] h-[1px] bg-[#EAECEF]"></div>
        <div className="text-[#707a8a] font-Roboto">Or</div>
        <div className="w-[136px] h-[1px] bg-[#EAECEF]"></div>
      </div>

      <div className="flex justify-between w-[50%] mx-auto pt-3">
        <Google />
        <FaceBook />
      </div>
    </>
  );
};

export default React.memo(AuthForm);
