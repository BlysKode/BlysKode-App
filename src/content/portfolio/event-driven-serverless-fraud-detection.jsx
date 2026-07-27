export default function CaseStudyBody({ project }) {
  return (
    <>
      <p>
        Financial platforms process enormous volumes of transactions and have to catch fraud the
        moment it happens, without slowing down legitimate payments. Batch systems are too slow,
        single-cloud setups risk downtime, and sensitive financial data demands strict encryption
        and a complete audit trail. Blyskode designed and built an event-driven, serverless fraud
        detection system that solves all four at once.
      </p>

      <h2>The challenge</h2>
      <ul>
        <li>Detect fraudulent transactions in real time, at scale, without adding latency to good payments.</li>
        <li>Stay resilient — no single cloud provider should be a single point of failure.</li>
        <li>Keep every transaction encrypted and produce an auditable record for compliance.</li>
        <li>Scale elastically with unpredictable transaction volume while controlling cost.</li>
      </ul>

      <h2>The architecture</h2>
      <p>
        Here is the full system. Every transaction flows from ingestion through serverless ML
        inference to a decision and an audit log, spanning both AWS and Azure.
      </p>

      <figure>
        <img
          src={project.image}
          width="1214"
          height="645"
          loading="lazy"
          alt="Architecture diagram of the event-driven serverless fraud detection system: financial transaction events flow from Apache Kafka and Azure Event Grid into stream filtering and anomaly detection, then to AWS Lambda and Azure Functions running Scikit-learn and PyTorch models for inference, producing alerts and rejections, with AWS KMS and Azure Key Vault providing keys and Kinesis Firehose, Amazon S3, and Athena handling audit logging."
        />
        <figcaption>End-to-end architecture: ingestion, processing, serverless ML inference, key management, and audit.</figcaption>
      </figure>

      <h2>How it works</h2>
      <p>
        <strong>1. Ingestion.</strong> Financial transaction events stream into <strong>Apache
        Kafka</strong>, which handles global event distribution.{' '}
        <strong>Azure Event Grid</strong> fans those events out across regions and clouds, so every
        downstream service receives them
        with low latency.
      </p>
      <p>
        <strong>2. Stream processing.</strong> A processing layer performs <strong>stream filtering
        and anomaly detection</strong>, surfacing the transactions that look unusual and routing
        them into the inference pipeline.
      </p>
      <p>
        <strong>3. Serverless ML inference.</strong> Each flagged event triggers <strong>AWS
        Lambda</strong> and <strong>Azure Functions</strong> in parallel, each running machine
        learning models built with <strong>Scikit-learn</strong> and <strong>PyTorch</strong> to
        score the transaction for fraud. Because the inference is serverless, it scales
        automatically to any spike in volume and costs nothing while idle.
      </p>
      <p>
        <strong>4. Decisioning.</strong> Model inference produces real-time <strong>alerts or
        rejections</strong> for suspicious transactions, so fraud is stopped before it settles.
      </p>
      <p>
        <strong>5. Key management.</strong> <strong>AWS KMS</strong> and <strong>Azure Key
        Vault</strong> supply encryption keys to every component in the pipeline, keeping sensitive
        financial data protected end to end.
      </p>
      <p>
        <strong>6. Audit and logging.</strong> Every transaction and its outcome is streamed through
        <strong> Kinesis Firehose</strong> into <strong>Amazon S3</strong> and made queryable with
        <strong> Amazon Athena</strong>, giving a complete, compliant audit trail that analysts can
        search at any time.
      </p>

      <h2>Why this design</h2>
      <ul>
        <li><strong>Real-time:</strong> event-driven serverless inference scores transactions in milliseconds.</li>
        <li><strong>Multi-cloud:</strong> running across AWS and Azure removes single-vendor risk and improves resilience.</li>
        <li><strong>Elastic and cost-efficient:</strong> serverless scales with load and you only pay for what actually runs.</li>
        <li><strong>Secure and auditable:</strong> managed key vaults plus full logging meet the security and compliance bar financial data requires.</li>
      </ul>

      <h2>The outcome</h2>
      <p>
        The result is a production-grade blueprint for catching fraud the instant it happens — one
        that scales elastically with transaction volume, stays resilient across two clouds, and
        keeps a complete, encrypted, auditable record of every decision. It is the kind of
        AI-and-cloud system Blyskode builds end to end, from architecture to deployment.
      </p>
    </>
  )
}
