import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbLink
} from '@/components/shadcn/breadcrumb';

const BreadcrumbComponent = ({ items }) => {
  return (
    <Breadcrumb>
      {items.map((item, index) => (
        <>
          <BreadcrumbItem key={item.href || item.label}>
            {item.href ? (
              <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
            ) : (
              item.label
            )}
          </BreadcrumbItem>
          {items?.length > index + 1 &&
            <BreadcrumbSeparator />
          }
        </>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;