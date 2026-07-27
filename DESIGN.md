# Design Contract: Apex Kaolin & Mullite

## Design Direction
"The Apex Precision Mineral" – A high-end, minimalist industrial aesthetic that emphasizes technical precision and global scale. The design uses a deep navy base to convey stability and authority, accented by a professional orange to highlight key technical data and calls to action. The layout is clean, avoiding typical industrial clutter, and focuses on "Data-First" presentation for professional B2B buyers.

## Reference Sources
- Brand Selection: Option D - Apex Kaolin & Mullite
- Supplier Data Source: Gemstone Kaolin Technical Files (De-identified)
- Industry Standard: Global Refractory & Foundry B2B Benchmarks
- Vendor Grounding: vendor/open-design/adapter/STATIC_POLICY.md, vendor/open-design/upstream/design-systems/industrial/DESIGN.md (Fallback to high-end industrial defaults)

## Design Tokens
- **Colors**:
  - `--color-primary`: `#1A365D` (Dark Blue – Trust, Branding, Headers)
  - `--color-accent`: `#E88C30` (Professional Orange – Precision, heat/refractory hint, CTAs)
  - `--color-bg-base`: `#F7FAFC` (Mineral Gray – Neutral page backgrounds)
  - `--color-bg-alt`: `#FFFFFF` (Pure White – Component cards and data tables)
  - `--color-text-main`: `#2D3748` (Dark Gray – Body copy)
  - `--color-text-muted`: `#718096` (Muted Gray – Technical labels and metadata)
- **Typography**:
  - `--font-stack`: `system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`
  - `--font-size-hero`: `3rem` (1.2 line-height)
  - `--font-size-h2`: `2.25rem` (1.3 line-height)
  - `--font-weight-bold`: `700`
- **Spacing/Radius**:
  - `--radius-base`: `4px`
  - `--spacing-section`: `80px`

## Page Structure
1. **Homepage**: Hero focus on "1790°C" and "Precision". Spotlight on Kaolin & Mullite.
2. **Product Center**: Data-heavy specs for Calcined Kaolin, Foundry Mullite, Refractory Mullite.
3. **Industry Solutions**: Vertical pages for Foundry, Refractory, and Ceramics.
4. **Quality & Lab**: Focus on ISO compliance and testing rigor.
5. **About Us**: Global wholesale footprint, independent brand narrative.
6. **Contact Us**: Technical RFQ form.

## Component Plan
- `hero-industrial`: Bold technical value prop.
- `spec-table`: Responsive data grid for chemical/physical properties.
- `solution-card`: Application-led imagery and benefits.
- `data-highlight`: Large visual callouts for key specs.
- `rfq-form`: Specialized mineral procurement fields.

## Copy Tone
- **Voice**: Authoritative, precise, technical, objective.
- **Example**: "Engineered for 1790°C Refractoriness," "Global Wholesale Solutions."
- **Strict Rule**: ZERO mention of "Anhui Jinyan" or local supplier details.

## Responsive Rules
- Desktop: Full grid, side-by-side specs.
- Mobile: Single column, sticky RFQ button, scrollable tables.

## Implementation Notes
- Static Site (GitHub + Cloudflare).
- Tailwind CSS implementation.
- Metadata audit required for all PDF/Image assets to ensure de-identification.

## Image Manifest
| Filename | Source | Usage |
| :--- | :--- | :--- |
| `public/assets/images/hero-industrial.jpg` | `unsplash:photo-1518709268805-4e9042af9f23` | Homepage Hero |
| `public/assets/images/kaolin-product.jpg` | `imageGenerate: "Professional macro photography of white calcined kaolin powder, bright clean lighting, minimalist industrial aesthetic"` | Product Page |
| `public/assets/images/mullite-product.jpg` | `imageGenerate: "Professional macro photography of light gray mullite sand, precise granules, high-end industrial marketing style"` | Product Page |
| `public/assets/images/foundry-usage.jpg` | `unsplash:photo-1565106430482-8f6e74349ca1` | Industry Solutions |
| `public/assets/images/refractory-heat.jpg` | `imageGenerate: "Interior view of an industrial high-temperature furnace with glowing refractory lining, professional photography"` | Industry Solutions |
| `public/assets/images/lab-quality.jpg` | `unsplash:photo-1581091226825-a6a2a5aee158` | Quality Page |
| `public/assets/images/iso-badges.png` | `imageGenerate: "Minimalist vector badges for ISO 9001 and ISO 14001, professional flat style, dark blue color"` | Quality Page |

## Technical Product Data (Reference)
- **Calcined Kaolin**: Al2O3: 48.89%, Fe2O3: 0.69%, Refractoriness: 1790°C.
- **Mullite**: Al2O3: 46.27%, Fe2O3: 0.65%, Refractoriness: 1790°C.
