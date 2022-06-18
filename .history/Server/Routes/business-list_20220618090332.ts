import express from 'express';
const router = express.Router();

import { AuthGuard } from '../../Util';

import {DisplayBusinessList, DisplayAddList, ProcessDeleteList, ProcessAddList, DisplayEditPage, ProcessEditList } from '../controllers/business-list';

router.get('/business-list', AuthGuard, DisplayBusinessList);

router.get('/add', AuthGuard, DisplayAddList);

router.get('/edit/:mistake', AuthGuard, DisplayEditPage);

router.post('/add', AuthGuard, ProcessAddList);



router.post('/edit/:mistake', AuthGuard, ProcessEditList);

router.get('/delete/:mistake', AuthGuard, ProcessDeleteList);

export default router;