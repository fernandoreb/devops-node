const express = require('express')
const controllerOpenBanking = require('../controllers/open-banking-controller')
const router = express.Router()

/**
 * Roteador da API OpenBanking
 */
router.get('/discovery/v1/status', controllerOpenBanking.status)
router.get('/discovery/v1/outages', controllerOpenBanking.outages)

router.get('/channels/v1/branches', controllerOpenBanking.channels_branches)
router.get('/channels/v1/electronic-channels', controllerOpenBanking.channels_eletronic)
router.get('/channels/v1/phone-channels', controllerOpenBanking.channels_phone)
router.get('/channels/v1/banking-agents', controllerOpenBanking.banking_agents)

router.get('/products-services/v1/personal-accounts', controllerOpenBanking.products_services_personal_acc)
router.get('/products-services/v1/business-accounts', controllerOpenBanking.products_services_business_acc)

router.get('/admin/v1/metrics', controllerOpenBanking.admin_metrics)

module.exports = router