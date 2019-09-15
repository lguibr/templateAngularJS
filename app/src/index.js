import angular from "angular";
import "./index.scss";
import "angular-material/angular-material.css";
import appBar from "./components/appBar/appBar";
import content from "./components/content/content";
import angularMaterial from "angular-material";
import angularAnimate from "angular-animate";
import angularUIRouter from "angular-ui-router";

angular
    .module("app", [angularMaterial, angularAnimate, angularUIRouter])
    .directive("appBar", appBar)
    .directive("content", content);
