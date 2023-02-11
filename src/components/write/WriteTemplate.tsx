import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BackLink } from '../common/ArrowButton';
import { AppLayout, First, MainNav, Second } from '../layout/AppLayout';
import { PageGrid } from '../layout/GridLayout';
import TagsForm from '../tags/TagsForm';
import CoreButton from './CoreButton';
import ImageAdd from './ImageAdd';
import Tap from './Tap';
import TapSide from './TapSide';
import WriterHead from './WriterHeader';

export type TapProps = {};

function WriteTemplate({}: TapProps) {
  return (
    <PageGrid as="main">
      <MainNav className="col-span-2 sticky top-0 h-[100vh] min-h-[0] overflow-hidden border-r">
        <div className="flex px-4 py-4 border-b items-center justify-center h-[4.6875rem]">
          <div className="py-2 px-4">
            <BackLink href="/">
              <div className="w-[240px] text-[#334155] text-base flex items-center justify-between font-semibold pl-3">
                BookReview
              </div>
            </BackLink>
          </div>
        </div>
        <TapSide />
      </MainNav>
      <AppLayout
        className="col-span-8 mxl:col-span-12"
        first={
          <First>
            <div className="flex items-center justify-between">
              <WriterHead />
              <CoreButton />
            </div>
            <div className="px-4 py-4">
              <TagsForm />
            </div>
          </First>
        }
        second={
          <Second>
            <Tap />
          </Second>
        }
      />
    </PageGrid>
  );
}

export default React.memo(WriteTemplate);
