import express from 'express';
const router = express.Router();

import { AuthGuard } from '../../Util';

import {DisplayBusinessList, DisplayAddList, ProcessAddList, DisplayEditList, ProcessEditList } from '../controllers/business-list';

router.get('/business-list', AuthGuard, DisplayBusinessList)

router.get('/add', AuthGuard, DisplayAddList)

router.post('/edit', AuthGuard, ProcessAddList)

router.get('/edit', AuthGuard, DisplayEditList)

router.post('/add', AuthGuard, ProcessEditList)


export default router;