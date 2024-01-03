/*
 * @Author: gongxi33
 * @Date: 2023-12-15 09:56:17
 * @LastEditTime: 2023-12-15 11:29:56
 * @LastEditors: gongxi33
 * @Description:
 * @FilePath: /micro-app-jd/next-child/next.config.js
 */
/** @type {import('next').NextConfig} */

const basePath = "";

const assetPrefix =
	process.env.NODE_ENV === "production"
		? `线上域名${basePath}`
		: `http://localhost:${process.env.PORT || 3000}${basePath}`;

module.exports = {
	basePath,
	assetPrefix,
	// 添加 assetPrefix 地址到 publicRuntimeConfig
	publicRuntimeConfig: {
		assetPrefix,
	},
};
