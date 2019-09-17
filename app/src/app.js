import angular from "angular";
import "./app.scss";
import "angular-material/angular-material.css";
import appBar from "./components/appBar/appBar";
import content from "./components/content/content";
import angularMaterial from "angular-material";
import angularAnimate from "angular-animate";
import angularUIRouter from "angular-ui-router";
import template from "./index.html";

const app = {
    template: template
};

angular
    .module("app", [angularMaterial, angularAnimate, angularUIRouter])
    .component("app", app)
    .directive("appBar", appBar)
    .directive("content", content);