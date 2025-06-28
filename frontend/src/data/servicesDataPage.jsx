// src/data/servicesData.js
import React from 'react';
import kitchenImg from '../assets/home/gallery7.jpg';
import electricalImg from '../assets/services/serv1.webp';
import janitorialImg from '../assets/services/serv3.webp';
import sfr from '../assets/home/gallery9.jpg';
import facilities from '../assets/home/gallery11.jpg';
import janitorialImg2 from '../assets/home/gallery12.jpg';
import Landscaping  from '../assets/home/gallery4.jpg';
// ...importá el resto de imágenes según los servicios

const servicesData = [
  {
    title: 'Kitchen, Bathroom & Closets Remodel',
    image: kitchenImg,
    details: [
      'Kitchen Remodeling: Design & material selection',
      'Closet Systems: Custom solutions with expert craftsmanship',
      'Bathroom Remodeling: Comprehensive involvement from start to finish',
      'Custom Wall Units: Tailored designs for any space, from simple to ornate',
    ],
  },
  {
    title: 'Electrical and Lighting',
    image: electricalImg,
    details: [
      'Interior and exterior electrical system maintenance',
      'Lighting retrofits and upgrades',
      'Energy-efficient solutions',
    ],
  },
  {
    title: 'Janitorial Services',
    image: janitorialImg,
    details: [
      'Daily and deep cleaning routines',
      'Eco-friendly products and equipment',
      'Post-construction cleanup services',
    ],
  },
  {
    title: 'SFR (Single Family Rental Solutions)',
    image: sfr,
    details: [
      'Turnkey renovation and maintenance solutions',
      'Rapid response for tenant issues',
      'Quality assurance for rental-ready units',
    ],
  },
  {
    title: 'Facilities Engineering',
    image: facilities,
    details: [
      'Preventive maintenance programs',
      'Energy management and optimization',
      'Technical troubleshooting and diagnostics',
    ],
  },
  {
    title: janitorialImg,
    image: janitorialImg2 ,
    details: [
      'General repairs for commercial and residential buildings',
      'Emergency on-call repair teams',
      'Scheduled maintenance check-ups',
    ],
  },
  {
    title: 'HVAC and Mechanical',
    image: electricalImg,
    details: [
      'Full-service heating, ventilation, and air conditioning',
      '24/7 emergency HVAC repairs',
      'Preventive maintenance and inspection',
    ],
  },
  {
    title: 'Landscaping and Grounds',
    image: Landscaping ,
    details: [
      'Commercial landscape design & maintenance',
      'Irrigation and seasonal planting',
      'Hardscaping and outdoor lighting',
    ],
  },
  {
    title: 'Emergency Services',
    image: kitchenImg,
    details: [
      '24/7 disaster response',
      'Flood and fire recovery',
      'Board-up and security services',
    ],
  },
  {
    title: 'BTR (Build To Rent Solutions)',
    image: electricalImg,
    details: [
      'New construction tailored for rental portfolios',
      'Collaboration with developers and investors',
      'Compliance and permitting support',
    ],
  },
  {
    title: 'Handyman - Reactive Work Order Solution',
    image: janitorialImg,
    details: [
      'On-demand repair and fix solutions',
      'Mobile task force deployment',
      'Tenant work order systems',
    ],
  },
  {
    title: 'Construction Engineering & Plan Design',
    image: kitchenImg,
    details: [
      'Blueprint drafting and consultation',
      'Structural engineering and load analysis',
      'Digital planning tools for accurate execution',
    ],
  },
  {
    title: 'General Construction, Commercial',
    image: electricalImg,
    details: [
      'Ground-up commercial builds',
      'Permit management and inspections',
      'Project oversight and subcontractor coordination',
    ],
  },
  {
    title: 'General Construction, Residential',
    image: janitorialImg,
    details: [
      'Custom home building',
      'Additions and major renovations',
      'Construction scheduling and budgeting',
    ],
  },
  {
    title: 'Construction Remodeling Solutions',
    image: kitchenImg,
    details: [
      'Whole-building transformations',
      'Design/build delivery',
      'Coordination of all trades and phases',
    ],
  },
];

export default servicesData;
