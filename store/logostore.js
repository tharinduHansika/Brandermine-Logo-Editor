import React from 'react';
import { hookstate, useHookstate } from '@hookstate/core';

export const logostore = hookstate({
    svg:null,
    _id:null,
    suggestions:null,
    data:null,
    fid:null,
    uid:null,
    brand_name:'',
    slogan:''
});

