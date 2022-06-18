import express from 'express';
const router = express.Router();

import { AuthGuard } from '../../Util';

import {DisplayBusinessList, DisplayAddList, ProcessAddList, DisplayEditList, ProcessEditList } from '../controllers/business-list';

router.get('/business-list', AuthGuard, DisplayBusinessList)

router.get('/add', AuthGuard, DisplayAddList)

router.post('/add', AuthGuard, ProcessAddList)

router.get('/edit', AuthGuard, DisplayEditList)

router.post('/e', AuthGuard, ProcessEditList)


export default router;