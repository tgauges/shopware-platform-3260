import template from './sw-cms-el-preview-image.html.twig';
import './sw-cms-el-preview-image.scss';

const { Component } = Shopware;

// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
Component.register('sw-cms-el-preview-image', {
    template,
});
