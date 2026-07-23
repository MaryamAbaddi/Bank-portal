import Section from "./Section";
import Field from "../atoms/Field";
import StatusPill from "../atoms/StatusPill";
import { isExpired } from "../../utils/date";

// Same shape used for a pending request AND an issued guarantee, so this
// single component renders both the RequestDrawer and ActiveGuaranteeDrawer.
export default function DetailBody({ data }) {
  return (
    <>
      <Section title="Applicant">
        <Field label="Legal name" value={data.applicant.legalName} />
        <Field label="Contractor ID" value={data.applicant.contractorId} />
        <Field label="Registration (CR)" value={data.applicant.cr} />
        <Field label="Tax / VAT" value={data.applicant.tax} />
        <Field label="Address" value={data.applicant.address} />
        <Field label="Contact" value={data.applicant.contact} />
        <Field label="Email" value={data.applicant.email} />
        <Field label="Phone" value={data.applicant.phone} />
      </Section>

      <Section title="Project">
        <Field label="Project" value={data.project.name} />
        <Field label="Location" value={data.project.location} />
        <Field label="Contract value" value={data.project.value} />
        <Field label="Description" value={data.project.description} />
        <Field label="Duration" value={data.project.duration} />
      </Section>

      <Section title="Guarantee">
        <Field label="Type" value={data.guarantee.type} />
        <Field label="Amount" value={data.guarantee.amount} />
        <Field label="Validity" value={data.guarantee.validity} />
        <Field label="Conditions" value={data.guarantee.conditions} />
        <Field
          label="Status"
          value={<StatusPill expired={isExpired(data.guarantee.expiryDate)} />}
        />
      </Section>

      <Section title="Beneficiary">
        <Field label="Company" value={data.beneficiary.company} />
        <Field label="Address" value={data.beneficiary.address} />
        <Field label="Contact" value={data.beneficiary.contact} />
        <Field label="Email" value={data.beneficiary.email} />
        <Field label="Phone" value={data.beneficiary.phone} />
      </Section>

      <Section title="Documents">
        {data.documents.map((d) => (
          <Field key={d.name} label={d.name} value={d.status} />
        ))}
      </Section>

      <Section title="Declarations">
        <Field
          label="Information accurate"
          value={data.declarations.accuracy ? "Confirmed" : "Not confirmed"}
        />
        <Field
          label="Indemnifies bank"
          value={data.declarations.indemnify ? "Confirmed" : "Not confirmed"}
        />
        <Field
          label="Accepts terms"
          value={data.declarations.terms ? "Confirmed" : "Not confirmed"}
        />
        <Field label="Signature" value={data.declarations.signature} />
      </Section>
    </>
  );
}
