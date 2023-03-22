import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Breadcrumbs from './Breadcrumbs';
import BreadcrumbItem from "../BreadcrumbItem";

describe('Breadcrumbs component', () => {
  test('renders without crashing', () => {
    render(<Breadcrumbs />);
  });

  test('renders the correct children of type BreadcrumbItem', () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Section</BreadcrumbItem>
      </Breadcrumbs>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Section')).toBeInTheDocument();
  });

  test('applies the govuk-breadcrumbs--collapse-on-mobile class when collapseOnMobile is true', () => {
    render(<Breadcrumbs collapseOnMobile />);
    const breadcrumbs = screen.getByRole('list');
    expect(breadcrumbs.parentElement).toHaveClass('govuk-breadcrumbs--collapse-on-mobile');
  });

  test('applies the passed class', () => {
    const className = 'custom-class';
    render(<Breadcrumbs classes={className} />);
    const breadcrumbs = screen.getByRole('list');
    expect(breadcrumbs.parentElement).toHaveClass('govuk-breadcrumbs', className);
  });

  test('applies the passed attributes', () => {
    const ariaLabel = 'Breadcrumb';
    render(<Breadcrumbs aria-label={ariaLabel} />);
    const breadcrumbs = screen.getByRole('list');
    expect(breadcrumbs.parentElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
