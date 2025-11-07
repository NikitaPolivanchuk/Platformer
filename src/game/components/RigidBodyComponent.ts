export default interface RigidBodyComponent {
  type: 'dynamic' | 'kinematic';
  groundedOn: symbol | null;
  gravityScale: number;
  maxFallSpeed: number;
}
