const getStylingPanelDefinition = (bkgOptionsEnabled, styleOptions, flags) => ({
  component: 'styling-panel',
  chartTitle: 'Object.Histogram',
  translation: 'LayerStyleEditor.component.styling',
  subtitle: 'LayerStyleEditor.component.styling',
  ref: 'components',
  useGeneral: true,
  useBackground: bkgOptionsEnabled,
  items:
    flags && flags?.isEnabled('CLIENT_IM_3364')
      ? {
          axisTitleSection: {
            translation: 'properties.axis.title',
            component: 'panel-section',
            items: styleOptions.getOptions('axis', 'axis.title'),
          },
          axisLabelSection: {
            translation: 'properties.axis.label',
            component: 'panel-section',
            items: styleOptions.getOptions('axis', 'axis.label.name'),
          },
          valueLabelSection: {
            translation: 'properties.value.label',
            component: 'panel-section',
            items: styleOptions.getOptions('value', 'label.value'),
          },
        }
      : undefined,
});
export default getStylingPanelDefinition;
