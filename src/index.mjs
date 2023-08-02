/**
 @Author: Blackzzc
 **/
import { Cesium } from './namespace'
const DEF_BASE_URL = './libs/szmap/resources/'

let _baseUrl = DEF_BASE_URL

export const config = {
  set baseUrl(baseUrl) {
    _baseUrl = baseUrl
  },
  get baseUrl() {
    return _baseUrl
  },
}

config.baseUrl && Cesium.buildModuleUrl.setBaseUrl(config.baseUrl)

export * from './modules'
export * from './modules/third-part'
export * from './modules/math'
