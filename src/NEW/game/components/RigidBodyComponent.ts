export default interface RigidBodyComponent {
  type: 'dynamic' | 'kinematic';
  groundedOn: symbol | null;
  gravityForce: number;
  maxFallSpeed: number;
}
