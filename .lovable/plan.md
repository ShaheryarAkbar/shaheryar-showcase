# Hiring-focused portfolio polish

## Changes
- Replace percentage-based skill cards and progress bars with grouped, scannable skill badges using only verified resume skills.
- Show “Lahore, Pakistan” as non-clickable text while preserving the working email, phone, and LinkedIn links.
- Add dynamic accessible names to the mobile navigation toggle: “Open menu” and “Close menu”.
- Keep project actions data-driven: no button for projects without real screenshots or links, and retain “View Screenshots” only for the seven projects with populated galleries.
- Preserve the current design, resume facts, five featured projects, Additional Work section, and existing screenshot modal views.

## Verification
- Check the portfolio at 320px, 390px, 768px, and desktop widths for horizontal overflow, clipped text, broken controls, and gallery usability.
- Confirm the location does not navigate, menu labels update with state, and exactly seven project cards expose screenshot buttons.
- Leave the current published site unchanged so the updated preview can be reviewed first.

## Technical details
- Reuse the existing semantic color tokens and current responsive spacing.
- Render skill groups from structured data and keep project CTA rendering conditional on populated image arrays.
