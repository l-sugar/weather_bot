const express = require("express");
const axios = require("axios");

const config = require("../config");

const ds_secret = config.ds_secret;
const base_url = config.ds_base_url;
const hamburg = config.hamburg_coord;

const full_url = base_url + ds_secret + hamburg;

const forecast = () => {
	axios
		.get(full_url)
		.then(response => {
			return response.minutely.summary;
		})
		.catch(error => {
			console.log(error);
		});
};

module.exports = forecast;
