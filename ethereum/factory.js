import web3 from './web3';
import campaignFactory from './build/factory_campaign.json';


const instance = new web3.eth.Contract(JSON.parse(campaignFactory.interface), '0xC019980fcAc1B5F440bAD3C3226D9Ed98CB79F79');

export default instance;