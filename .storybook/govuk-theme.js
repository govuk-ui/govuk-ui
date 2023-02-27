import { create } from '@storybook/theming';
import image from '../src/assets/govuk-ui-logo-light-mode.png';

export default create({
  base: 'light',
  brandTitle: 'GOV.UK UI',
  brandUrl: 'https://design-system.service.gov.uk/',
  brandImage: image,
  brandTarget: '_blank',
});
